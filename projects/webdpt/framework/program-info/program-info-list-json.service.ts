import { Injectable, Inject, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';

import { IDwOperationMap, IDwProgramData } from './interface/program.interface';
import { DwOperationInfoAttributeService } from './operation-info-attribute.service';
import { DW_PROGRAM_JSON, DW_PROGRAM_WEBDPT_JSON } from '../config/system.config';
import { programInfoJson } from '../config/program-info/program.config';
import { dwProgramDataDev } from '../config/program-info/program-dev.model';

@Injectable()
export class DwProgramInfoListJsonService {
  private _programListJsonMap: IDwOperationMap;
  private programListJsonSubject: BehaviorSubject<IDwOperationMap>;
  private _dwProgramInfoJson: Array<IDwProgramData>;

  constructor(
    @Inject(DW_PROGRAM_WEBDPT_JSON) private dwProgramWebdptJson: Array<any>, // 平台作業清單靜態設定檔
    @Inject(DW_PROGRAM_JSON) private dwProgramListJson: Array<any>, // 作業清單靜態設定檔
    private operationInfoAttributeService: DwOperationInfoAttributeService
  ) {
    this._programListJsonMap = null;
    this.programListJsonSubject = new BehaviorSubject<IDwOperationMap>(this._programListJsonMap);

    // 平台架構作業
    this._dwProgramInfoJson = JSON.parse(JSON.stringify(programInfoJson));
    const _dwProgramDataDev: Array<IDwProgramData> = JSON.parse(JSON.stringify(dwProgramDataDev));

    if (isDevMode()) {
      this._dwProgramInfoJson = this._dwProgramInfoJson.concat(_dwProgramDataDev);
    }

    // Program靜態設定檔
    const programWebdptData = JSON.parse(JSON.stringify(this.dwProgramWebdptJson));

    let programData = JSON.parse(JSON.stringify(this.dwProgramListJson));
    if (!Array.isArray(programData)) {
      programData = [];
    }

    const listJson = [
      ...this.dwProgramInfoJson, // 平台架構作業
      ...programWebdptData,
      ...programData // Program靜態設定檔
    ];

    this._programListJsonMap = {};
    listJson.forEach(
      item => {
        const programId = item.id;

        // 調整成符合 IDwProgram 資料型態
        delete item['id'];

        this.operationInfoAttributeService.setAttr(item);
        this._programListJsonMap[programId] = item;

        // // string -> txt -> excel分隔符號為"^"
        // const testList = '{"id":"^' + programId
        //   + '^\'","type":"^' + (item.type ? item.type : '')
        //   + '^\'","name":"^' + item.name
        //   + '^\'","routerLink":"^' + (item.routerLink ? item.routerLink : '')
        //   + '^\'"},';
        // console.log(testList);
      }
    );

    const listMap = Object.assign({}, this._programListJsonMap); // 僅複製屬性值，不是深層複製(deep clone)
    this.programListJsonSubject.next(listMap);
  }

  /**
   * 取得作業清單靜態設定檔
   */
  get programListJsonMap$(): Observable<IDwOperationMap> {
    return this.programListJsonSubject.asObservable().pipe(
      filter(obsData => obsData !== null), // 不廣播初始值
      distinctUntilChanged() // 有改變時才廣播
    );
  }

  /**
   * 取得作業清單靜態設定檔
   */
  get programListJsonMap(): IDwOperationMap {
    const listMap = {};

    Object.keys(this._programListJsonMap).forEach(
      key => {
        const item = Object.assign({}, this._programListJsonMap[key]);
        listMap[key] = item;
      }
    );

    return listMap;
  }

  /**
   * 平台架構作業
   */
  get dwProgramInfoJson(): Array<IDwProgramData> {
    return JSON.parse(JSON.stringify(this._dwProgramInfoJson));
  }
}
