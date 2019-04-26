import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';

import { DwUserService } from '../auth/user.service';
import { DwUserStorage } from '../auth/user-storage';
import { DwIamUserRepository } from './repository/iam-user-repository';
import { DwSystemConfigService } from '../config/config.service';

@Injectable()
export class DwIamUserService extends DwUserService {
  iamUrl: string;
  constructor(
    protected userStorage: DwUserStorage,
    private iamUserRepository: DwIamUserRepository,
    private configService: DwSystemConfigService) {
    super(userStorage);
    this.configService.get('iamUrl').subscribe(
      url => this.iamUrl = url
    );
  }

  /**
   * 取得使用者資訊
   * return 返回Observable
   */
  public read(userId: string): Observable<object> {
    const subject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    // const subject: Subject<any> = new Subject(); // 訂閱時, 還未被 new 出來.
    const info = {
      success: true,
      description: '', // 取值失敗時, 顯示.
      userInfo: null // 取得的回傳值.
    };

    this.iamUserRepository.getUserInfo(userId).subscribe(
      (userDatas) => {
        if (userDatas['message'] !== undefined && userDatas['message']) {
          info.success = false;
          info.description = userDatas['message'];
          subject.next(info);
          // subject.complete();  // 統一交由下方的return 把值回寫
          return;
        }

        info.userInfo = userDatas;

        this.setUserInfo(userDatas);
        subject.next(info);
      }
    );

    return subject.asObservable().pipe(
      filter(obsData => obsData !== null), // 不廣播初始值
      distinctUntilChanged() // 有改變時才廣播
    );

  }


}
