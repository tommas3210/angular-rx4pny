import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="margin-left: 60px">
      <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwPlacement="topLeft">TL</button>
      <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwPlacement="top">Top</button>
      <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwPlacement="topRight">TR</button>
    </div>
    <div style="width: 60px; float: left;">
      <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwPlacement="leftTop">LT</button>
      <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwPlacement="left">Left</button>
      <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwPlacement="leftBottom">LB</button>
    </div>
    <div style="width: 60px; margin-left: 252px;">
      <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwPlacement="rightTop">RT</button>
      <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwPlacement="right">Right</button>
      <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwPlacement="rightBottom">RB</button>
    </div>
    <div style="margin-left: 60px; clear: both;">
      <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwPlacement="bottomLeft">BL</button>
      <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwPlacement="bottom">Bottom</button>
      <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwPlacement="bottomRight">BR</button>
    </div>
    <ng-template #contentTemplate>
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
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
}
