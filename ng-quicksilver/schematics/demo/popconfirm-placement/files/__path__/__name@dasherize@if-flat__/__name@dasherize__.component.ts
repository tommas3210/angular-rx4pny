import { Component } from '@angular/core';
import { DwMessageService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="margin-left: 60px">
      <button dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()" dwPlacement="topLeft" dw-button>TL</button>
      <button dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()" dwPlacement="top" dw-button>Top</button>
      <button dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()" dwPlacement="topRight" dw-button>TR</button>
    </div>
    <div style="width: 60px; float: left;">
      <button dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()" dwPlacement="leftTop" dw-button>LT</button>
      <button dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()" dwPlacement="left" dw-button>Left</button>
      <button dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()" dwPlacement="leftBottom" dw-button>LB</button>
    </div>
    <div style="width: 60px; margin-left: 252px;">
      <button dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()" dwPlacement="rightTop" dw-button>RT</button>
      <button dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()" dwPlacement="right" dw-button>Right</button>
      <button dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()" dwPlacement="rightBottom" dw-button>RB</button>
    </div>
    <div style="margin-left: 60px; clear: both;">
      <button dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()" dwPlacement="bottomLeft" dw-button>BL</button>
      <button dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()" dwPlacement="bottom" dw-button>Bottom</button>
      <button dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()" dwPlacement="bottomRight" dw-button>BR</button>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    :host ::ng-deep .demo {
      overflow: auto;
    }

    :host ::ng-deep .ant-popover-wrap > a {
      margin-right: 8px;
    }

    button {
      margin-right: 8px;
      margin-bottom: 8px;
      width: 70px;
      text-align: center;
      padding: 0;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
  cancel(): void {
    this.dwMessageService.info('click cancel');
  }

  confirm(): void {
    this.dwMessageService.info('click confirm');
  }

  constructor(private dwMessageService: DwMessageService) {

  }
}
