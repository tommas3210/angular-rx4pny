import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-switch [ngModel]="true" dwCheckedChildren="开" dwUnCheckedChildren="关"></dw-switch>
    <br>
    <dw-switch [ngModel]="false" dwCheckedChildren="1" dwUnCheckedChildren="0"></dw-switch>
    <br>
    <dw-switch [ngModel]="true" [dwCheckedChildren]="checkedTemplate" [dwUnCheckedChildren]="unCheckedTemplate"></dw-switch>
    <ng-template #checkedTemplate><i class="anticon anticon-check"></i></ng-template>
    <ng-template #unCheckedTemplate><i class="anticon anticon-cross"></i></ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    dw-switch {
      margin-bottom: 8px;
    }`]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
