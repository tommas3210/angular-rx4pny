import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DwModalService, DwModalRef, DwMessageService } from 'ng-quicksilver';

import { DW_SELECT_MODAL_DEFAULT } from '../../../config/system.config';
import { DwSelectModalComponent } from '../select-modal.component';
import { IDwSelectModalConfig, IDwSelectModalModal, IDwSelectModalTable,
  IDwModalServiceCreate, IDwSelectModalCustomizeConfig } from '../interface/select-modal.interface';
import { IDwSelectModalDataSource } from '../interface/select-modal-datasource.interface';


@Injectable()
export class DwSelectModalService {
  private _defaultDefs: IDwSelectModalConfig; // 共用的開窗設定檔.
  private _modalConfig: IDwSelectModalModal; // 共用+作業的開窗設定檔.
  private _tableDefs: IDwSelectModalTable; // 共用+作業的Table設定檔.
  private _modal: Subject<any>;

  constructor(private dwModalService: DwModalService,
    private translateService: TranslateService,
    private dwMessage: DwMessageService,
    @Inject(DW_SELECT_MODAL_DEFAULT) private openSelectModalDefault: IDwSelectModalConfig
  ) {
    this._defaultDefs = Object.assign({}, this.openSelectModalDefault);
  }


  /**
   * 檢查開窗的設定檔
   *
   * param {IDwSelectModalCustomizeConfig} config
   * returns {boolean}
   */
  private _checkCustomizeConfig(config: IDwSelectModalCustomizeConfig): boolean {
    // 檢查資料來源.
    if (!config.hasOwnProperty('dataSource')) {
      this.dwMessage.error(this.translateService.instant('dw-select-modal-error-dataSource'));
      return false;
    }

    // 使用的 id 欄位不得為空值.
    if (!config.tableIdField) {
      this.dwMessage.error(this.translateService.instant('dw-select-modal-error-tableIdField'));
      return false;
    }

    // 使用的 name 欄位不得為空值.
    if (!config.tableNameField) {
      this.dwMessage.error(this.translateService.instant('dw-select-modal-error-tableNameField'));
      return false;
    }

    // 表格欄位定義不得為空值.
    if (!config.tableColDefs.length) {
      this.dwMessage.error(this.translateService.instant('dw-select-modal-error-tableColDefs'));
      return false;
    }

    const arrError = [];
    config.tableColDefs.forEach((val) => {
      if (!val.hasOwnProperty('title') || !val.title) {
        arrError.push(this.translateService.instant('dw-select-modal-error-tableColDefs-title'));
      }
      if (!val.hasOwnProperty('field') || !val.field) {
        arrError.push(this.translateService.instant('dw-select-modal-error-tableColDefs-field'));
      }
    });
    if (arrError.length) {
      this.dwMessage.error(arrError.join('\\n'));
      return false;
    }

    return true;
  }


  /**
   * 取得開窗 modal 的設定參數.
   *
   * param {IDwSelectModalCustomizeConfig} config
   * returns {IDwSelectModalModal}
   */
  private _getModalConfig(config: IDwSelectModalCustomizeConfig): IDwSelectModalModal {
    const _Config = Object.assign({}, config);
    const modalConfig = {};
    if (_Config.modalTitle) {
      modalConfig['dwTitle'] = _Config.modalTitle;
    }
    if (_Config.modalWidth) {
      modalConfig['dwWidth'] = _Config.modalWidth;
    }
    if (_Config.modalOkText) {
      modalConfig['dwOkText'] = _Config.modalOkText;
    }
    if (_Config.modalCancelText) {
      modalConfig['dwCancelText'] = _Config.modalCancelText;
    }
    if (_Config.modalOnOk) {
      modalConfig['onOk'] = _Config.modalOnOk;
    }
    if (_Config.modalOnCancel) {
      modalConfig['onCancel'] = _Config.modalOnCancel;
    }
    if (_Config.modalAfterClose) {
      modalConfig['afterClose'] = _Config.modalAfterClose;
    }
    if (_Config.modalAfterOpen) {
      modalConfig['afterOpen'] = _Config.modalAfterOpen;
    }

    return modalConfig;
  }


  /**
   * 取得開窗 table 的設定參數.
   *
   * param {IDwSelectModalCustomizeConfig} config
   * returns {IDwSelectModalTable}
   */
  private _getTableDefs(config: IDwSelectModalCustomizeConfig): IDwSelectModalTable {
    const _Config = Object.assign({}, config);
    const tableDefs = {
      idField: '', // table 內使用 id 的對應欄位.
      nameField: '', // table 內使用 name 的對應欄位.
      colDefs: [] // table 的欄位定義.
    };

    if (_Config.tableIdField) {
      tableDefs['idField'] = _Config.tableIdField;
    }
    if (_Config.tableNameField) {
      tableDefs['nameField'] = _Config.tableNameField;
    }
    if (_Config.tableColDefs) {
      tableDefs['colDefs'] = _Config.tableColDefs;
    }
    if (_Config.tableMultiSelect !== undefined && typeof _Config.tableMultiSelect === 'boolean') {
      tableDefs['multiSelect'] = _Config.tableMultiSelect;
    }

    if (_Config.tablePageSize) {
      tableDefs['dwPageSize'] = _Config.tablePageSize;
    }

    if (_Config.tableShowTag !== undefined && typeof _Config.tableShowTag === 'boolean') {
      tableDefs['showTag'] = _Config.tableShowTag;
    }

    if (_Config.tableIsFilter !== undefined && typeof _Config.tableIsFilter === 'boolean') {
      tableDefs['isFilter'] = _Config.tableIsFilter;
    }

    if (_Config.tableShowPagination !== undefined && typeof _Config.tableShowPagination === 'boolean') {
      tableDefs['dwShowPagination'] = _Config.tableShowPagination;
    }

    if (_Config.tableShowSizeChanger !== undefined && typeof _Config.tableShowSizeChanger === 'boolean') {
      tableDefs['dwShowSizeChanger'] = _Config.tableShowSizeChanger;
    }

    if (_Config.tablePageIndexChange) {
      tableDefs['pageIndexChange'] = _Config.tablePageIndexChange;
    }

    if (_Config.tablePageSizeChange) {
      tableDefs['pageSizeChange'] = _Config.tablePageSizeChange;
    }

    if (_Config.tableCurrentPageDataChange) {
      tableDefs['currentPageDataChange'] = _Config.tableCurrentPageDataChange;
    }

    if (_Config.tableNoResult) {
      tableDefs['dwNoResult'] = _Config.tableNoResult;
    }

    if (_Config.tablePageSizeOptions) {
      tableDefs['dwPageSizeOptions'] = _Config.tablePageSizeOptions;
    }

    return tableDefs;
  }

  /**
   * 取得開窗 merge 後的設定檔.
   *
   */
  private _analyzeConfig(config: IDwSelectModalCustomizeConfig): void {
    // 允許作業的 tableDefs override defaultDefs.
    const _allConfig = {...this._defaultDefs, ...config};

    // 開窗 modal 的參數.
    this._modalConfig = this._getModalConfig(_allConfig);

    // 開窗 table 的作業用設定參數.
    this._tableDefs = this._getTableDefs(_allConfig);
  }


   /**
    * 多語(利用KEY值, 取值).
    *
    */
   private _translateConfig(): void {
      this._modalConfig.dwTitle = this.translateService.instant(this._modalConfig.dwTitle);
      this._modalConfig.dwOkText = this.translateService.instant(this._modalConfig.dwOkText);
      this._modalConfig.dwCancelText = this.translateService.instant(this._modalConfig.dwCancelText);
  }

  /**
   * 取得將傳入dwContent實例中的預選值 selected.
   *
   */
  private _getSelected(selected: Array<any>): Array<any> {
    let arrSelected = [];
    if (selected) {
      if (typeof selected === 'string') {
        arrSelected = [selected];
      } else {
        arrSelected = selected;
      }
    }

    return arrSelected;
  }


  /**
   * 新增註冊事件, 如果 defs 裡也有註冊事件, 需調用.
   *
   */
  private _registerEvent(): any {
    // 提出來是為了要 return 給 dwModalRef 用.
    const regEvent = {
      afterClose: (): void => {},
      afterOpen: (): void => {}
    };

    // 如果作業有定義 dwOnOk 時, 調用作業的 dwOnOk.
    let onOk = (): void => {};
    if (this._modalConfig.hasOwnProperty('onOk')) {
      onOk = this._modalConfig.onOk;
      delete this._modalConfig.onOk;
    }
    this._modalConfig.dwOnOk = (result: DwSelectModalComponent): void => {
      console.log('result--dwOnOk--->>>', result);
      const selectedValue = result.getSelectedValue();
      this._modal.next(selectedValue);
      this._modal.complete();
      onOk();
    };


    // 如果作業有定義 dwOnCancel 時, 調用作業的 dwOnCancel.
    let onCancel = (): void => {};
    if (this._modalConfig.hasOwnProperty('onCancel')) {
      onCancel = this._modalConfig.onCancel;
      delete this._modalConfig.onCancel;
    }
    this._modalConfig.dwOnCancel = (result: DwSelectModalComponent): void => {
      console.log('result--dwOnCancel--->>>', result);
      this._modal.complete();
      onCancel();
    };


    // 如果作業有定義 afterClose 時, 調用作業的 afterClose.
    if (this._modalConfig.hasOwnProperty('afterClose')) {
      regEvent.afterClose = this._modalConfig.afterClose;
      delete this._modalConfig.afterClose;
    }


    // 如果作業有定義 afterOpen 時, 調用作業的 afterOpen.
    if (this._modalConfig.hasOwnProperty('afterOpen')) {
      regEvent.afterOpen = this._modalConfig.afterOpen;
      delete this._modalConfig.afterOpen;
    }

    return regEvent;
  }


  /**
   * 調用 ng-zorro 的 create 開窗.
   *
   * param {IDwSelectModalDataSource} dataSource: 資料源.
   * param {Array<any>} selected: 預選值.
   * returns {DwModalRef}
   */
  private _modalCreate(dataSource: IDwSelectModalDataSource, selected: Array<any>): DwModalRef {
    // 建立的開窗，都會返回一個 DwModalRef 物件.
    let dwModalRef: DwModalRef;

    // 最終開窗的設定檔(為了作業的設定可以被保留在 this._modalConfig 裡).
    const modalConfig: IDwModalServiceCreate = {
      dwContent: DwSelectModalComponent,
      dwFooter: [
        {
          label: this._modalConfig.dwCancelText, // 取消按鈕文字.
          shape: 'default',
          onClick(): void {
            dwModalRef.triggerCancel();
          }
        },
        {
          label: this._modalConfig.dwOkText, // 確認按鈕文字.
          type: 'primary',
          onClick(): void {
            dwModalRef.triggerOk();
          }
        }
      ],
      dwComponentParams: {            // 傳遞給 DwSelectModalComponent 的參數.
        tableDefs: this._tableDefs,   // dwTable設定檔.
        selected: selected,           // 已選取的清單.
        dataSource: dataSource        // 資料源(後端服務).
      },
      ...this._modalConfig
    };

    dwModalRef = this.dwModalService.create(modalConfig);

    return dwModalRef;
  }



  /**
   * 開窗.
   *
   * param {IDwSelectModalCustomizeConfig} config: 作業的開窗設定.
   * returns {Observable}: 開窗的Observable.
   */
  public open(config: IDwSelectModalCustomizeConfig, selected: Array<any>): Observable<any> {
    this._modal = new Subject();

    // 檢查開窗的設定檔.
    if (!this._checkCustomizeConfig(config)) {
      this._modal.complete();
      return this._modal;
    }

    // 分析設定檔.
    this._analyzeConfig(config);

    // 多語.
    this._translateConfig();
    // 設定觸發事件.
    const _regEvent = this._registerEvent();

    // 取得傳遞給 DwSelectModalComponent 的預選值 selected.
    const arrSelected: Array<any> = this._getSelected(selected);

    const dwModalRef: DwModalRef = this._modalCreate(config.dataSource, arrSelected);

    dwModalRef.afterClose.subscribe(() => {
      _regEvent.afterClose();
    });

    dwModalRef.afterOpen.subscribe(() => {
      _regEvent.afterOpen();
    });

    return this._modal.asObservable();
  }
}
