import { Component, forwardRef, SkipSelf, Optional, ViewChild, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import {
  DwTreeNode, DwFormatEmitEvent, DwTreeComponent, DwDropdownContextComponent,
  DwMessageService, DwModalService, DwFormatBeforeDropEvent
} from 'ng-quicksilver';

import {
  DwComponent, IDwLanguageList, DwLanguageListService, DwLanguageService,
  DwProgramInfoListJsonService, IDwOperationMap, DwProgramInfoLangLoaderService, DwFinereportRepository,
  DELETE, DwDeleteService, DwUpdateService, UPDATE, DwIamPermissionRepository
} from '@webdpt/framework';
import { openModeOptions } from '../model/enum';
import { DwSysMenuNodeCreateModel, DwTMenuLangCModel, IDwSysMenuNode } from '../model/menu.model';
import { DwSysMenuEditComponent } from '../modals/dw-sys-menu-edit/dw-sys-menu-edit.component';
import { DwSysMenuTreeUiService } from '../service/tree-ui.service';
import { DwSysMenuRepository } from '../service/menu-repository';
import { DwSysMenuIconService } from '../service/menu-icon.service';


@Component({
  selector: 'app-dw-sys-menu-list',
  templateUrl: './dw-sys-menu-list.component.html',
  styleUrls: ['./dw-sys-menu-list.component.less'],
  providers: [
    {
      provide: DwComponent, useExisting: forwardRef(() => DwSysMenuListComponent)
    }
  ]
})
export class DwSysMenuListComponent extends DwComponent {
  @ViewChild('menuTreeView') menuTreeView: DwTreeComponent;
  public dropdown: DwDropdownContextComponent;
  public activedNode: DwTreeNode;
  public dragNodeElement;
  public languageList: IDwLanguageList[];
  public languageOption: string;
  public addMenuType = 'category'; // 新增項目類型
  public addCategoryForm: FormGroup;
  public addExternalUrlForm: FormGroup;
  public openModeOptions = openModeOptions; // 開啟方式下拉選單
  public checkedNodeList = [];
  public programOptions = []; // 作業選擇清單
  public checkedProgramOption: Array<string> = []; // 作業勾選清單
  public programSearchValue = ''; // 作業搜尋值
  public searchValue;
  public menuTreeNodes: DwTreeNode[] = null; // ng-zorro-antd v1.6.0 畫面dwData不能給空陣列[]，否則背景會有警告訊息

  constructor(
    @SkipSelf() @Optional() _parentDwComponent: DwComponent,
    public fb: FormBuilder,
    private modalService: DwModalService,
    private sysMenuIconService: DwSysMenuIconService,
    private messageService: DwMessageService,
    private translateService: TranslateService,
    private languageListService: DwLanguageListService,
    private languageService: DwLanguageService,
    private sysMenuRepository: DwSysMenuRepository,
    private deleteService: DwDeleteService,
    private updateService: DwUpdateService,
    private programInfoListJsonService: DwProgramInfoListJsonService,
    private programInfoLangLoaderService: DwProgramInfoLangLoaderService,
    private sysReportRepository: DwFinereportRepository,
    private sysMenuTreeUiService: DwSysMenuTreeUiService,
    private iamPermissionRepository: DwIamPermissionRepository
  ) {
    super(_parentDwComponent);

    this.languageOption = this.languageService.currentLanguage;
    this.languageListService.getLanguagesList().subscribe(
      (list: IDwLanguageList[]) => {
        this.languageList = list;
      }
    );

    this.setMenuTree();
  }

  afterContentInit(): void { }

  afterViewInit(): void { }

  onInit(): void {
    // 單頭Form欄位
    // 目錄
    this.addCategoryForm = this.fb.group({
      'addCategoryName': ['', [Validators.required]],
      'addCategoryIconClass': [''],
      'addCategoryDefaultExpand': [false, [Validators.required]]
    });

    // 外部連結
    this.addExternalUrlForm = this.fb.group({
      'addExternalUrlName': ['', [Validators.required]],
      'addExternalUrlIconClass': [''],
      'addExternalUrlUrl': ['', [Validators.required]],
      'addExternalUrlOpenMode': ['iframe', [Validators.required]]
    });

    // this.onBeforeGetOrder();
  }

  onDestroy(): void { }

  @HostListener('mouseleave', ['$event'])
  mouseLeave(event: MouseEvent): void {
    event.preventDefault();
    if (this.dragNodeElement && this.dragNodeElement.className.indexOf('dw-f-sysmenu-is-dragging') > -1) {
      this.dragNodeElement.className = this.dragNodeElement.className.replace(' dw-f-sysmenu-is-dragging', '');
    }
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(): void {
    // do not prevent
    if (this.dragNodeElement && this.dragNodeElement.className.indexOf('dw-f-sysmenu-is-dragging') > -1) {
      this.dragNodeElement.className = this.dragNodeElement.className.replace(' dw-f-sysmenu-is-dragging', '');
    }
  }

  public switchLanguage(): void {
    if (this.addMenuType === 'program') {
      this.addProgramResetForm();
    }
    this.sysMenuTreeUiService.setMenuTreeName(this.languageOption, this.menuTreeNodes);
  }

  // // #1888:Tree的checkedNodeList只能累加，重設Tree也會殘留 https://github.com/NG-ZORRO/ng-zorro-antd/issues/1888
  // // #1888 暫解
  // private nodeListReSet(checklist: DwTreeNode[]): void {
  //   checklist.forEach(
  //     (tn: DwTreeNode) => {
  //       if (tn.isChecked) {
  //         tn.isChecked = false;
  //       }

  //       if (tn.isSelected) {
  //         tn.isSelected = false;
  //       }

  //       if (tn.children.length > 0) {
  //         this.nodeListReSet(tn.children);
  //       }
  //     }
  //   );
  // }

  private setMenuTree(): void {
    this.sysMenuRepository.tree([]).subscribe(
      responseMenuTree => {
        // this.nodeListReSet(this.menuTreeNodes); // #1888 暫解
        this.checkedNodeList = [];
        this.activedNode = null;
        this.menuTreeNodes = [];

        const initData = this.menuInit(null, responseMenuTree.data.dw_menu);
        const len = initData.length;

        for (let i = 0; i < len; i++) {
          this.menuTreeNodes.push(new DwTreeNode(initData[i]));
        }

        if (len > 0) {
          this.sysMenuTreeUiService.setMenuTreeName(this.languageOption, this.menuTreeNodes);
        }
      }
    );
  }

  public treeDelete(node?: any): void {
    this.modalService.confirm({
      dwTitle: this.translateService.instant('dw-sys-menu-msg-confirmDelete'),
      dwContent: '',
      dwOkText: this.translateService.instant('dw-sys-menu-delete'),
      dwOkType: 'danger',
      dwOnOk: (): void => {
        const deleteList = []; // 要傳給API的刪除清單
        if (node) {
          deleteList.push(
            {
              $state: DELETE,
              id: node.key,
              version: node.origin.version
            }
          );
        } else {
          this.checkedNodeList.forEach(
            checkedNode => {
              deleteList.push(
                {
                  $state: DELETE,
                  id: checkedNode.key,
                  version: checkedNode.origin.version
                }
              );
            }
          );
        }

        const dataset = {
          dw_menu: deleteList
        };

        // API Request Method: DELETE，只接受參數放在body
        this.deleteService.delete('DWSys/menu', dataset).subscribe(
          (result: any) => {
            if (result.success) {
              this.checkedNodeList = [];
              this.setMenuTree();
              const msg = this.translateService.instant('dw-sys-menu-msg-deleted');
              this.messageService.create('success', `${msg}`);
            } else {
              const msg = this.translateService.instant('dw-sys-menu-msg-deleteFailed');
              this.messageService.create('error', `${msg}`);
            }
          }
        );
      },
      dwCancelText: this.translateService.instant('dw-sys-menu-cancel'),
      dwOnCancel: (): void => { }
    });
  }

  private menuInit(parentNode: any, menuDataSource: IDwSysMenuNode[]): Array<any> {
    const menuTreeList = [];
    const len = menuDataSource.length;

    for (let i = 0; i < len; i++) {
      const obj: IDwSysMenuNode = JSON.parse(JSON.stringify(menuDataSource[i]));

      const treeNode = {
        // title: obj.code,
        name: obj.code,
        key: obj.id,
        version: obj.version,
        sequence: obj.sequence,
        iconClass: obj.icon_class,
        type: obj.type,
        code: obj.code, // 作業編號
        isLeaf: obj.type === 'category' ? false : true,
        children: [],
        parentNode: parentNode,
        checked: false
      };

      if (obj.hasOwnProperty('child')) {
        if (obj.child.dw_menu.length > 0) {
          treeNode.children = this.menuInit(treeNode, obj.child.dw_menu);
        }
      }

      menuTreeList.push(treeNode);
    }

    return menuTreeList;
  }

  public mouseAction(name: string, e: DwFormatEmitEvent): void {
    // if (name !== 'over') {
    //   console.log(name, e);
    // }
  }

  public menuTreeCheckBoxChange(): void {
    this.checkedNodeList = this.menuTreeView.getCheckedNodeList();

    // // #1888 暫解
    // this.checkedNodeList = [];
    // const list = this.menuTreeView.getCheckedNodeList();
    // list.forEach(
    //   (tn: DwTreeNode) => {
    //     if (tn.isChecked) {
    //       this.checkedNodeList.push(tn);
    //     }
    //   }
    // );

    // console.log('checkedNodes: %o', this.menuTreeView.getCheckedNodeList());
    // console.log('selectedNodes: %o', this.menuTreeView.getSelectedNodeList());
    // console.log('halfCheckedNodes: %o', this.menuTreeView.getHalfCheckedNodeList());
    // console.log(this.menuTreeView.dwTreeService.getCheckedNodeList());
  }

  // 選中節點
  public menuTreeOnClick(data: DwFormatEmitEvent): void {
    if (data.node.isSelected) {
      this.activedNode = data.node;
    } else {
      this.activedNode = null;
    }
  }

  public menuTreeOnDragStart(event: DwFormatEmitEvent): void {
    // disallow drag if root or search
    this.activedNode = null;
    this.dragNodeElement = event.event.srcElement;
    if (this.dragNodeElement.className.indexOf('dw-f-sysmenu-is-dragging') === -1) {
      this.dragNodeElement.className = this.dragNodeElement.className + ' dw-f-sysmenu-is-dragging';
    }
  }

  // DwFormatBeforeDropEvent在Tree裡面，無法使用主畫面this的service，所以暫存資訊交給後面的DwFormatEmitEvent判斷
  public menuTreeBeforeDrop(event: DwFormatBeforeDropEvent): Observable<boolean> {
    let canDrop = true;
    const dragNode = event.dragNode;
    const targeNode = event.node;
    const pos = event.pos; // 放置位置
    let parentNode: DwTreeNode = null;
    let parent_id = '';
    const code = dragNode.origin.code ? dragNode.origin.code : '';
    let sibling: DwTreeNode[] = []; // 同階層節點
    let isExist = false;

    // 放置位置（-1：目標節點前面，0：目標節點內部，1：目標節點後面）
    // 和新增時檢查同層節點是否已存在相同作業或報表addNodeIsExist()邏輯相同，但拖曳時要排除本身節點
    if (pos === 0) {
      parentNode = targeNode;
    } else {
      parentNode = targeNode.parentNode;
    }

    if (parentNode) {
      parent_id = parentNode.key;
      sibling = parentNode.children;
      if (code !== '') {
        sibling.forEach(
          s => {
            if (s.origin.code === code && s.key !== dragNode.key) {
              isExist = true;
            }
          }
        );
      }
    }

    if (isExist) {
      canDrop = false;
    }

    if (canDrop) {
      event.dragNode.isChecked = false; // 拖曳節點取消勾選，搭配menuTreeOnDrop的menuTreeCheckBoxChange()
    }

    event.dragNode.origin.dragTemp = { // 暫存資訊
      canDrop: canDrop,
      dragPos: event.pos,
      parentNode: parentNode,
      parent_id: parent_id
    };

    return of(canDrop);
  }

  public menuTreeOnDrop(event: DwFormatEmitEvent): void {
    const dragNode = event.dragNode;
    const targeNode = event.node;
    const canDrop = dragNode.origin.dragTemp.canDrop;

    if (canDrop) {
      const pos = dragNode.origin.dragTemp.dragPos; // 放置位置

      // let parentNode: DwTreeNode;
      // let parent_id = '';
      const id = dragNode.key;
      const parentNode = dragNode.origin.dragTemp.parentNode;
      const parent_id = dragNode.origin.dragTemp.parent_id;
      let sequence = 0;

      this.menuTreeCheckBoxChange(); // 拖曳節點取消勾選，搭配menuTreeBeforeDrop改節點屬性

      // 放置位置（-1：目標節點前面，0：目標節點內部，1：目標節點後面）
      if (pos === 0) {
        sequence = this.sysMenuTreeUiService.sequenceMax(parentNode.children, id) + 1;
      } else {
        if (pos === -1) {
          sequence = targeNode.origin.sequence;
        } else if (pos === 1) {
          sequence = targeNode.origin.sequence + 1;
        }
      }

      // // 放置位置（-1：目標節點前面，0：目標節點內部，1：目標節點後面）
      // if (pos === 0) {
      //   parentNode = targeNode;
      //   parent_id = parentNode.key;
      //   sequence = this.sysMenuTreeUiService.sequenceMax(parentNode.children, id) + 1;
      // } else {
      //   parentNode = targeNode.parentNode;

      //   if (parentNode) {
      //     parent_id = parentNode.key;
      //   }

      //   if (pos === -1) {
      //     sequence = targeNode.origin.sequence;
      //   } else if (pos === 1) {
      //     sequence = targeNode.origin.sequence + 1;
      //   }
      // }

      delete dragNode.origin['dragTemp']; // 取得menuTreeBeforeDrop給的暫存資訊後就移除

      const reqData = {
        dw_menu: {
          $state: UPDATE,
          id: id,
          parent_id: parent_id,
          sequence: sequence
        }
      };

      this.updateService.update('DWSys/menu/drag', reqData).subscribe(
        (response: any) => {
          this.rsetMenuTreeChild(parentNode); // 拖曳後刷新同層節點
        }
      );
    } else {
      const message = this.translateService.instant('dw-sys-menu-msg-exist');
      this.messageService.create('error', `${message}`);
    }
  }

  private resetForm(e: MouseEvent, fGroup: FormGroup): void {
    // 從radio觸發的有MouseEvent，但是從下拉選單觸發取得的是選取值
    if (e.type) {
      e.preventDefault();
    }

    fGroup.reset();

    for (const key in fGroup.controls) {
      if (fGroup.controls.hasOwnProperty(key)) {
        fGroup.controls[key].markAsPristine();
        fGroup.controls[key].updateValueAndValidity();
      }
    }
  }

  public iconClassSelect(fControl: AbstractControl): void {
    this.sysMenuIconService.iconClassSelect(fControl);
  }

  public iconClassDelete(fControl: AbstractControl): void {
    this.sysMenuIconService.iconClassDelete(fControl);
  }

  public addMenuTypeChange(type: string, e: MouseEvent): void {
    switch (type) {
      case 'category':
        this.addCategoryResetForm(e);
        break;
      case 'program':
        this.addProgramResetForm();
        break;
      case 'fineReport':
        this.addProgramResetForm();
        break;
      case 'externalUrl':
        this.addExternalUrlResetForm(e);
        break;
      default:
    }
  }

  // 刷新子節點
  private rsetMenuTreeChild(parentNode: DwTreeNode): void {
    this.activedNode = null;

    if (parentNode) {
      const parentId = parentNode.key;
      parentNode.clearChildren();
      this.sysMenuRepository.tree([parentId]).subscribe(
        responseMenuTree => {
          const initData = this.menuInit(null, responseMenuTree.data.dw_menu[0].child.dw_menu);
          const len = initData.length;
          parentNode.addChildren(initData);

          if (len > 0) {
            this.sysMenuTreeUiService.setMenuTreeName(this.languageOption, this.menuTreeNodes);
          }
        }
      );
    } else {
      this.setMenuTree();
    }
  }
  // 新增目錄 *******************************************
  public addCategoryResetForm(e: MouseEvent): void {
    const iconClass = this.addCategoryForm.get('addCategoryIconClass').value;
    this.resetForm(e, this.addCategoryForm);
    this.addCategoryForm.controls['addCategoryIconClass'].setValue(iconClass);
    this.addCategoryForm.controls['addCategoryDefaultExpand'].setValue(false);
  }

  public addCategorySave(): void {
    const data: DwSysMenuNodeCreateModel = new DwSysMenuNodeCreateModel();
    const dataC: DwSysMenuNodeCreateModel[] = [];
    data.type = this.addMenuType;

    const tMenuLanguage: DwTMenuLangCModel = new DwTMenuLangCModel();
    tMenuLanguage.language = this.languageOption;
    tMenuLanguage.name = this.addCategoryForm.get('addCategoryName').value;
    data.dw_menu_language.push(tMenuLanguage);

    data.icon_class = this.addCategoryForm.get('addCategoryIconClass').value;
    data.default_expand = this.addCategoryForm.get('addCategoryDefaultExpand').value;
    dataC.push(data);

    this.sysMenuTreeUiService.addNodeSave(this.activedNode, dataC, this.menuTreeNodes).subscribe(
      result => {
        if (result.success) {
          this.rsetMenuTreeChild(result.parentNode); // 新增後刷新同層節點
        } else if (result.message) {
          this.messageService.create('error', `${result.message}`);
          // const msg = this.translateService.instant('dw-sys-menu-msg-addfail', { value1: parentTitle });
        }
      }
    );
  }

  // 新增作業 *******************************************
  public addProgramResetForm(): void {
    this.getProgramOptions();
    this.programSearchValue = '';
  }

  public addProgramSave(): void {
    const dataC: DwSysMenuNodeCreateModel[] = [];

    this.programOptions.forEach(
      option => {
        if (option.check) {
          const data: DwSysMenuNodeCreateModel = new DwSysMenuNodeCreateModel();
          data.type = option.menuType;
          data.code = option.key;
          dataC.push(data);
        }
      }
    );

    this.sysMenuTreeUiService.addNodeSave(this.activedNode, dataC, this.menuTreeNodes).subscribe(
      result => {
        if (result.success) {
          this.rsetMenuTreeChild(result.parentNode); // 新增後刷新同層節點
        } else if (result.message) {
          this.messageService.create('error', `${result.message}`);
          // const msg = this.translateService.instant('dw-sys-menu-msg-addfail', { value1: parentTitle });
        }
      }
    );

    // 全部不勾選
    this.programOptions.forEach(
      option => {
        option.check = false;
      }
    );
  }

  public getProgramOptions(): void {
    this.programOptions = [];
    this.checkedProgramOption = [];
    const _dwProgramInfoJson = this.programInfoListJsonService.dwProgramInfoJson;

    this.programInfoListJsonService.programListJsonMap$.subscribe(
      (programListJsonMap: IDwOperationMap) => {
        this.programInfoLangLoaderService.getTranslation(this.languageOption).subscribe(
          (translation: any) => {
            Object.keys(programListJsonMap).forEach(
              key => {
                // 平台共用程式不用列
                let show = true;
                _dwProgramInfoJson.forEach(
                  frameworkProgram => {
                    if (key === frameworkProgram.id) {
                      show = false;
                    }
                  }
                );

                if (show) {
                  const name = translation[key] + '(' + key + ')';
                  this.programOptions.push(
                    {
                      check: false,
                      menuType: 'program',
                      key: key, // 作業編號或報表編號
                      // type: programListJsonMap[key].type,
                      name: name,
                      isMatched: true
                    }
                  );
                }
              }
            );

            this.sysReportRepository.language(this.languageOption).subscribe(
              (reportList: any) => {
                Object.keys(reportList).forEach(
                  key => {
                    const rItem = reportList[key];
                    this.programOptions.push(
                      {
                        check: false,
                        menuType: 'fineReport',
                        key: key, // 作業編號或報表編號
                        // type: '',
                        name: rItem,
                        isMatched: true
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }

  /**
   * 作業搜尋
   */
  public programSearch(): void {
    this.programOptions.forEach(
      option => {
        const key: string = option.key;
        const name: string = option.name;

        option.check = false;

        if (this.programSearchValue === '') {
          option.isMatched = true;
        } else if (key.indexOf(this.programSearchValue, 0) >= 0) {
          option.isMatched = true;
        } else if (name.indexOf(this.programSearchValue, 0) >= 0) {
          option.isMatched = true;
        } else {
          option.isMatched = false;
        }
      }
    );
  }

  public programOptionChecked(checkList: Array<string>): void {
    this.checkedProgramOption = checkList;
    const len = this.checkedProgramOption.length;

    this.programOptions.forEach(
      option => {
        let checked = false;
        for (let i = 0; i < len; i++) {
          if (option.key === this.checkedProgramOption[i]) {
            checked = true;
            break;
          }
        }
        option.check = checked;
      }
    );
  }

  // 新增外部連結 *******************************************
  public addExternalUrlResetForm(e: MouseEvent): void {
    const iconClass = this.addExternalUrlForm.get('addExternalUrlIconClass').value;
    this.resetForm(e, this.addExternalUrlForm);
    this.addExternalUrlForm.controls['addExternalUrlIconClass'].setValue(iconClass);
    this.addExternalUrlForm.controls['addExternalUrlOpenMode'].setValue('iframe');
  }
  public addExternalUrlSave(): void {
    const data: DwSysMenuNodeCreateModel = new DwSysMenuNodeCreateModel();
    const dataC: DwSysMenuNodeCreateModel[] = [];
    data.type = this.addMenuType;

    const tMenuLanguage: DwTMenuLangCModel = new DwTMenuLangCModel();
    tMenuLanguage.language = this.languageOption;
    tMenuLanguage.name = this.addExternalUrlForm.get('addExternalUrlName').value;
    data.dw_menu_language.push(tMenuLanguage);

    data.icon_class = this.addExternalUrlForm.get('addExternalUrlIconClass').value;
    data.url = this.addExternalUrlForm.get('addExternalUrlUrl').value;
    data.open_mode = this.addExternalUrlForm.get('addExternalUrlOpenMode').value;
    dataC.push(data);

    this.sysMenuTreeUiService.addNodeSave(this.activedNode, dataC, this.menuTreeNodes).subscribe(
      result => {
        if (result.success) {
          this.rsetMenuTreeChild(result.parentNode); // 新增後刷新同層節點
        } else if (result.message) {
          this.messageService.create('error', `${result.message}`);
        }
      }
    );
  }

  public menuTreeNodeEdit(editNode: DwTreeNode): void {
    const id = editNode.key;
    const type = editNode.origin.type;

    this.sysMenuRepository.menuRead([id]).subscribe(
      response => {
        if (response.success) {
          const dataLen = response.data.dw_menu.length;
          if (dataLen > 0) {
            const dataSource = response.data.dw_menu[0];
            this.modalService.create({
              // dwWidth: 1000,
              dwTitle: this.translateService.instant('dw-sys-menu-nodeEditing'),
              dwStyle: { top: '20px' },
              dwMaskClosable: false, // 點擊遮罩是否允許關閉
              dwContent: DwSysMenuEditComponent,
              dwOnOk: (data: any): void => {
                // Menu>Prog>Report
                data.menuEditForm.get('editMenuLanguage').controls.forEach(
                  fGroup => {
                    if (fGroup.get('language').value === this.languageOption) {
                      editNode.origin.name = fGroup.get('name').value;
                    }
                  }
                );

                if (!editNode.origin.name) {
                  editNode.origin.name = data.master.codeName;
                }
                editNode.origin.version = data.master.version;
                editNode.origin.iconClass = data.menuEditForm.get('editIconClass').value;
              },
              dwOnCancel(): void { },
              dwFooter: null,
              dwComponentParams: {
                languageOption: this.languageOption,
                type: type,
                dataSource: dataSource
              }
            });
          } else {
            // 查無資料
            const msg = this.translateService.instant('dw-sys-menu-msg-notExist', { value1: editNode.origin.name });
            this.messageService.create('error', msg);
          }
        } else if (response.message) {
          this.messageService.create('error', `${response.message}`);
        }
      }
    );
  }
}
