import { Component, Renderer2 } from '@angular/core';

import { IAfterGuiAttachedParams, IFloatingFilter, RowNode, SerializedNumberFilter } from 'ag-grid-community';

import { IFloatingFilterParams } from 'ag-grid-community';
import { AgFrameworkComponent } from 'ag-grid-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface ButtonEditorFloatingFilterChange {
  model: SerializedNumberFilter;
}

export interface ButtonEditorFloatingFilterParams
  extends IFloatingFilterParams<SerializedNumberFilter, ButtonEditorFloatingFilterChange> {
  value: Array<string>;
}

@Component({
  selector: 'dw-floating-button-filter',
  template: `
      <dw-input-group dwSearch [dwSuffix]="suffix_2" dwSize="small">
        <input dwSize="small" dw-input placeholder="" name="filterValue" [(ngModel)]="filterValue" #filterInput readonly>
      </dw-input-group>

    <ng-template #suffix_2>
      <span dwSize="small" class="clearIcon" dw-button dwType="default" (click)="clear()" *ngIf="filterValue">
        <i class="anticon anticon-close-circle"></i>
      </span>
      <span dwSize="small" dw-button dwType="primary" dwSearch (click)="openModal()">
        <i class="anticon anticon-search"></i>
      </span>
    </ng-template>
  `, styles: [
      `
      .anticon-close-circle {
        cursor: pointer;
        color: #ccc;
        transition: color 0.3s;
        font-size: 12px;
      }

      .anticon-close-circle:hover {
        color: #999;
      }
      .clearIcon {
        background: none;
        width: 16px;
        border: none;
        bottom: 3px;
      }

      .ant-input-sm, .ant-btn-sm {
        height: 19px;
      }
    `
  ]
})
export class FloatingButtonEditorFilterComponent
  implements IFloatingFilter<SerializedNumberFilter, ButtonEditorFloatingFilterChange, ButtonEditorFloatingFilterParams>,
    AgFrameworkComponent<ButtonEditorFloatingFilterParams> {

  params: IFloatingFilterParams<any, any> | any;
  filterValue: any = null;
  modalService: any;

  onParentModelChanged(parentModel: any): void {
    this.filterValue = parentModel ? parentModel.value : null;
  }

  agInit(params: IFloatingFilterParams<any, any>): void {
    this.params = params;
    this.modalService = params['modalService'];
    this.filterValue = params.currentParentModel().value;
    if (this.modalService) {
      this.modalService.config.tableMultiSelect = true;
      this.modalService.config.tableIdField = 'name';
    }
  }

  // 清除條件
  clear(): void {
    this.filterValue = null;
    this.params.onFloatingFilterChanged(this.filterValue);
  }

  openModal(): void {
    if (!this.modalService) {
      return;
    }
    this.params.modalService.open(this.filterValue).subscribe(
      (result) => {
        this.filterValue = result.length === 0 ? null : result;
        this.params.onFloatingFilterChanged(this.filterValue);
      }
    );
  }

  afterGuiAttached(): void { }
}
