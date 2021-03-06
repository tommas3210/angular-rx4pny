import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-spin [dwSpinning]="isSpinning" [dwDelay]="500">
      <dw-alert [dwType]="'info'" [dwMessage]="'Alert message title'" [dwDescription]="'Further details about the context of this alert.'">
      </dw-alert>
    </dw-spin>
    <div style="margin-top:8px;">
      Loading state：
      <dw-switch [(ngModel)]="isSpinning"></dw-switch>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  isSpinning = false;
}
