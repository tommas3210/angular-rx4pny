import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div class="components-table-demo-control-bar">
      <form dw-form dwLayout="inline">
        <dw-form-item>
          <dw-form-label>
            <label>Bordered</label>
          </dw-form-label>
          <dw-form-control>
            <dw-switch [(ngModel)]="bordered" name="bordered"></dw-switch>
          </dw-form-control>
        </dw-form-item>
        <dw-form-item>
          <dw-form-label>
            <label>Loading</label>
          </dw-form-label>
          <dw-form-control>
            <dw-switch [(ngModel)]="loading" name="loading"></dw-switch>
          </dw-form-control>
        </dw-form-item>
        <dw-form-item>
          <dw-form-label>
            <label>Pagination</label>
          </dw-form-label>
          <dw-form-control>
            <dw-switch [(ngModel)]="pagination" name="pagination"></dw-switch>
          </dw-form-control>
        </dw-form-item>
        <dw-form-item>
          <dw-form-label>
            <label>Title</label>
          </dw-form-label>
          <dw-form-control>
            <dw-switch [(ngModel)]="title" name="title"></dw-switch>
          </dw-form-control>
        </dw-form-item>
        <dw-form-item>
          <dw-form-label>
            <label>Column Header</label>
          </dw-form-label>
          <dw-form-control>
            <dw-switch [(ngModel)]="header" name="header"></dw-switch>
          </dw-form-control>
        </dw-form-item>
        <dw-form-item>
          <dw-form-label>
            <label>Footer</label>
          </dw-form-label>
          <dw-form-control>
            <dw-switch [(ngModel)]="footer" name="footer"></dw-switch>
          </dw-form-control>
        </dw-form-item>
        <dw-form-item>
          <dw-form-label>
            <label>Expandable</label>
          </dw-form-label>
          <dw-form-control>
            <dw-switch [(ngModel)]="expandable" name="expandable"></dw-switch>
          </dw-form-control>
        </dw-form-item>
        <dw-form-item>
          <dw-form-label>
            <label>Checkbox</label>
          </dw-form-label>
          <dw-form-control>
            <dw-switch [(ngModel)]="checkbox" name="checkbox"></dw-switch>
          </dw-form-control>
        </dw-form-item>
        <dw-form-item>
          <dw-form-label>
            <label>Fixed Header</label>
          </dw-form-label>
          <dw-form-control>
            <dw-switch [(ngModel)]="fixHeader" name="fixHeader"></dw-switch>
          </dw-form-control>
        </dw-form-item>
        <dw-form-item>
          <dw-form-label>
            <label>No Result</label>
          </dw-form-label>
          <dw-form-control>
            <dw-switch [(ngModel)]="noResult" (ngModelChange)="noResultChange($event)" name="noResult"></dw-switch>
          </dw-form-control>
        </dw-form-item>
        <dw-form-item>
          <dw-form-label>
            <label>Simple Pagination</label>
          </dw-form-label>
          <dw-form-control>
            <dw-switch [(ngModel)]="simple" name="simple"></dw-switch>
          </dw-form-control>
        </dw-form-item>
        <dw-form-item>
          <dw-form-label>
            <label>Size</label>
          </dw-form-label>
          <dw-form-control>
            <dw-radio-group [(ngModel)]="size" name="size">
              <label dw-radio-button dwValue="default">Default</label>
              <label dw-radio-button dwValue="middle">Middle</label>
              <label dw-radio-button dwValue="small">Small</label>
            </dw-radio-group>
          </dw-form-control>
        </dw-form-item>
      </form>
    </div>
    <dw-table
      #dynamicTable
      (dwCurrentPageDataChange)="currentPageDataChange($event)"
      [dwScroll]="fixHeader?{ y: '240px' }:null"
      [dwData]="dataSet"
      [dwBordered]="bordered"
      [dwSimple]="simple"
      [dwLoading]="loading"
      [dwFrontPagination]="pagination"
      [dwShowPagination]="pagination"
      [dwFooter]="footer?'Here is Footer':null"
      [dwTitle]="title?'Here is Title':null"
      [dwSize]="size">
      <thead>
        <tr *ngIf="header">
          <th dwWidth="50px" dwShowExpand *ngIf="expandable"></th>
          <th dwWidth="62px" dwShowCheckbox *ngIf="checkbox" [(dwChecked)]="allChecked" [dwIndeterminate]="indeterminate" (dwCheckedChange)="checkAll($event)"></th>
          <th dwWidth="150px">Name</th>
          <th dwWidth="70px">Age</th>
          <th>Address</th>
          <th dwWidth="260px">Action</th>
        </tr>
      </thead>
      <tbody>
        <ng-template ngFor let-data [ngForOf]="dynamicTable.data">
          <tr>
            <td dwShowExpand *ngIf="expandable" [(dwExpand)]="data.expand"></td>
            <td dwShowCheckbox *ngIf="checkbox" [(dwChecked)]="data.checked" (dwCheckedChange)="refreshStatus()"></td>
            <td>{{data.name}}</td>
            <td>{{data.age}}</td>
            <td>{{data.address}}</td>
            <td>
              <a href="#">Action 一 {{data.name}}</a>
              <dw-divider dwType="vertical"></dw-divider>
              <a href="#">Delete</a>
            </td>
          </tr>
          <tr [dwExpand]="data.expand&&expandable">
            <td></td>
            <td [attr.colspan]="checkbox?5:4">{{data.description}}</td>
          </tr>
        </ng-template>
      </tbody>
    </dw-table>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .components-table-demo-control-bar {
        margin-bottom: 10px;
      }

      .components-table-demo-control-bar ::ng-deep .ant-form-item {
        margin-right: 15px;
        margin-bottom: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  dataSet = [];
  bordered = false;
  loading = false;
  pagination = true;
  header = true;
  title = true;
  footer = true;
  fixHeader = false;
  size = 'small';
  expandable = true;
  checkbox = true;
  allChecked = false;
  indeterminate = false;
  displayData = [];
  simple = false;
  noResult = false;

  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; expand: boolean; description: string; }>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const validData = this.displayData.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  ngOnInit(): void {
    for (let i = 1; i <= 20; i++) {
      this.dataSet.push({
        name       : 'John Brown',
        age        : `${i}2`,
        address    : `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked    : false,
        expand     : false
      });
    }
  }

  noResultChange(status: boolean): void {
    this.dataSet = [];
    if (!status) {
      this.ngOnInit();
    }
  }
}
