import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class DwIframeItemSubjectService {
    itemSource = new BehaviorSubject<any>({});
    item$: Observable<any> = this.itemSource.asObservable();

    private _item: any;
    set item(value: any) {
      this._item = JSON.parse(JSON.stringify(value));
      this.itemSource.next(this._item);
    }
    get item(): any {
        return this._item;
    }

    constructor() {
    }

    clear(): void {
      this.item = {};
    }
}
