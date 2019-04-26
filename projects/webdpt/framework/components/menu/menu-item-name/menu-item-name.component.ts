import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';

import { DwMenuService } from '../service/menu.service';
import { DwOperationInfoService } from '../../../program-info/operation-info.service';
import { IDwMenuConfigMap} from '../interface/menu.interface';
import { dwLanguagePre } from '../../language/model/language-pre';

@Component({
  selector: 'dw-menu-item-name',
  templateUrl: './menu-item-name.component.html',
  styleUrls: ['./menu-item-name.component.css']
})
export class DwMenuItemNameComponent implements OnInit {
  @ViewChild('dwRecursiveMenuItemSpanProg') dwRecursiveMenuItemSpanProg: TemplateRef<any>;
  @ViewChild('dwRecursiveMenuItemSpan') dwRecursiveMenuItemSpan: TemplateRef<any>;

  menuIdSpan: string;
  transMenuId: string;
  programIdSpan: string;
  transProgramId: string;
  private _menuId: string;
  private _programId: string;
  menuPre = dwLanguagePre.menu;
  programPre = dwLanguagePre.program;

  @Input()
  dwShowTooltip = true;

  get title(): any {
    if (!this.dwShowTooltip) {
      return '';
    } else {
      return this.transProgramId ? this.dwRecursiveMenuItemSpanProg : this.dwRecursiveMenuItemSpan;
    }
  }

  @Input()
  set menuId(menuId: string) {
    this._menuId = menuId;
  }

  @Input()
  set programId(programId: string) {
    if (this._programId !== programId) {
      this._programId = programId;
      this.changeProgramInfo();
    }
  }

  constructor(
    private menuService: DwMenuService,
    private operationInfoService: DwOperationInfoService
  ) { }

  ngOnInit(): void {

  }

  changeProgramInfo(): void {
    this.menuIdSpan = this._menuId;
    this.transMenuId = this.menuPre + this._menuId;

    this.programIdSpan = '';
    this.transProgramId = '';
    if (this._programId) {
      this.programIdSpan = this._programId;
      this.transProgramId = this.programPre + this._programId;

      // 帆軟報表執行期已把programId設成menuId，要取原始報表編號翻譯名稱
      this.menuService.getMenuConfigMap().subscribe(
        (menuConfigMap: IDwMenuConfigMap) => {
          // if (menuConfigMap !== null) {
          if (menuConfigMap && menuConfigMap[this._menuId]) {
            if (menuConfigMap[this._menuId].type === 'fineReport') {
              this._programId = menuConfigMap[this._menuId].code;
            }

            this.programIdSpan = this._programId;
            this.transProgramId = this.programPre + this._programId;
          }
          // }
        }
      );
    }

    // // Tab Menu 以作業編號查詢作業資訊
    // if (this._programId) {
    //   this.menuService.getMenuConfigMap().subscribe(
    //     (menuConfigMap: IDwMenuConfigMap) => {
    //       // this.menuConfigMap = menuConfigMap;
    //       // const menuConfigItem: IDwMenuConfigItem = this.menuConfigMap[this._menuId];
    //       let menuConfigItem: IDwMenuConfigItem = null;
    //       const menuConfigMapKeys = Object.keys(menuConfigMap);
    //       const len = menuConfigMapKeys.length;
    //       for (let i = 0; i < len; i++) {
    //         const key = menuConfigMapKeys[i];
    //         if (menuConfigMap[key].programId === this._programId) {
    //           this.setTransMenuId(key);
    //           menuConfigItem = menuConfigMap[key];
    //           break;
    //         }
    //       }

    //       if (menuConfigItem) {
    //         this.setTransProgramId(menuConfigItem);
    //       } else {
    //         // 作業沒有掛在Menu上，則從作業資訊查
    //         this.operationInfoService.operationInfo$(this._programId).subscribe(
    //           operationInfo => {
    //             // 從Menu動態產生作業編號，需要再取出原始程式code. ex.報表
    //             if (operationInfo.code && operationInfo.code !== '') {
    //               this.programIdSpan = operationInfo.code;
    //               this.transProgramId = this.programPre + operationInfo.code;
    //             } else {
    //               this.programIdSpan = this._programId;
    //               this.transProgramId = this.programPre + this._programId;
    //             }
    //           }
    //         );
    //       }

    //     }
    //   );
    // } else {
    //   // Menu 以Menu編號查詢作業資訊
    //   this.programIdSpan = '';
    //   this.transProgramId = '';

    //   this.menuService.getMenuConfigMap().subscribe(
    //     (menuConfigMap: IDwMenuConfigMap) => {
    //       const menuConfigItem: IDwMenuConfigItem = menuConfigMap[this._menuId];
    //       this.setTransProgramId(menuConfigItem);
    //     }
    //   );
    // }
  }

  // private setTransMenuId(menuId: string): void {
  //   if (menuId) {
  //     this.menuIdSpan = menuId;
  //     this.transMenuId = this.menuPre + menuId;
  //   } else {
  //     this.menuIdSpan = '';
  //     this.transMenuId = '';
  //   }
  // }

  // private setTransProgramId(menuConfigItem: IDwMenuConfigItem): void {
  //   if (menuConfigItem) {
  //     let programId = '';
  //     if (menuConfigItem.code) {
  //       programId = menuConfigItem.code;
  //     } else if (menuConfigItem.programId) {
  //       programId = menuConfigItem.programId;
  //     }

  //     if (programId) {
  //       this.programIdSpan = programId;
  //       this.transProgramId = this.programPre + programId;
  //     } else {
  //       this.programIdSpan = '';
  //       this.transProgramId = '';
  //     }
  //   } else {
  //     this.programIdSpan = '';
  //     this.transProgramId = '';
  //   }
  // }
}
