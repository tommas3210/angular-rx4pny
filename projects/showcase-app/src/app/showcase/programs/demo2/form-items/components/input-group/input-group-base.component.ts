import { Component } from '@angular/core';

@Component({
  selector: 'dw-input-group-base',
  template: `
    <dw-form-input-group [dwSuffix]="suffixTemplate" dwPrefixIcon="anticon anticon-user"
                         [(ngModel)]="searchText" dwLabel="前置圖示"
                         dwPlaceHolder="請輸入搜尋文字"
                         dwLabelSpan="8" dwInputSpan="16"></dw-form-input-group>
    <ng-template #suffixTemplate>
      <i class="anticon anticon-close-circle"
         (click)="searchText=null" *ngIf="searchText"></i>
    </ng-template>


    <dw-form-input-group dwSuffixIcon="anticon anticon-search"
                         [(ngModel)]="searchText" dwLabel="后置圖示"
                         dwPlaceHolder="請輸入搜尋文字"
                         dwLabelSpan="8" dwInputSpan="16"></dw-form-input-group>


    <dw-form-input-group dwSearch [dwSuffix]="suffixIconButton"
                         [(ngModel)]="searchText" dwLabel="自帶按鈕"
                         dwPlaceHolder="請輸入搜尋文字"
                         dwLabelSpan="8" dwInputSpan="16"></dw-form-input-group>
    <ng-template #suffixIconButton>
      <button dw-button dwType="primary" dwSearch><i class="anticon anticon-search"></i></button>
    </ng-template>

    <dw-form-input-group dwSearch dwSize="large" [dwSuffix]="suffixButton"
                         [(ngModel)]="searchText" dwLabel="自帶按鈕"
                         dwPlaceHolder="請輸入搜尋文字"
                         dwLabelSpan="8" dwInputSpan="16"></dw-form-input-group>
    <ng-template #suffixButton>
      <button dw-button dwType="primary" dwSize="large" dwSearch>Search</button>
    </ng-template>
    搜尋：{{searchText}}
  `,
  styles: [
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

      .anticon-close-circle:active {
        color: #666;
      }
    `
  ]
})
export class InputGroupBaseComponent {

  searchText = '';

  constructor() { }

}
