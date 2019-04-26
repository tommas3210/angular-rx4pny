import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DwCreateService, CREATE } from '@webdpt/framework';

@Injectable()
export class DwSysMenuCreateService {

  constructor(
    private createService: DwCreateService
  ) { }

  create(data: any): Observable<any> {
    const params: any = {
      dw_menu: data
    };

    return this.createService.create('DWSys/menu', params);
  }
}
