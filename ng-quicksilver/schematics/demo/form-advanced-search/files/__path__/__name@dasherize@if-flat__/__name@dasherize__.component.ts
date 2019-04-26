import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <form dw-form [formGroup]="validateForm" class="ant-advanced-search-form">
      <div dw-row [dwGutter]="24">
        <div dw-col [dwSpan]="8" *ngFor="let control of controlArray" [style.display]="control.show?'block':'none'">
          <dw-form-item dwFlex>
            <dw-form-label [dwFor]="'field'+control.index">Field {{control.index}}</dw-form-label>
            <dw-form-control>
              <input dw-input placeholder="placeholder" [formControlName]="'field'+control.index" [attr.id]="'field'+control.index">
            </dw-form-control>
          </dw-form-item>
        </div>
      </div>
      <div dw-row>
        <div dw-col [dwSpan]="24" style="text-align: right;">
          <button dw-button [dwType]="'primary'">Search</button>
          <button dw-button (click)="resetForm()">Clear</button>
          <a style="margin-left:8px;font-size:12px;" (click)="toggleCollapse()">
            Collapse
            <i class="anticon" [class.anticon-down]="isCollapse" [class.anticon-up]="!isCollapse"></i>
          </a>
        </div>
      </div>
    </form>
    <div class="search-result-list">
      Search Result List
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,

  <% if(inlineStyle) { %>styles: [`
      .ant-advanced-search-form {
        padding: 24px;
        background: #fbfbfb;
        border: 1px solid #d9d9d9;
        border-radius: 6px;
      }

      .search-result-list {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 200px;
        text-align: center;
        padding-top: 80px;
      }

      [dw-form-label] {
        overflow: visible;
      }

      button {
        margin-left: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  validateForm: FormGroup;
  controlArray = [];
  isCollapse = true;

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? (index < 6) : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    for (let i = 0; i < 10; i++) {
      this.controlArray.push({ index: i, show: i < 6 });
      this.validateForm.addControl(`field${i}`, new FormControl());
    }
  }
}
