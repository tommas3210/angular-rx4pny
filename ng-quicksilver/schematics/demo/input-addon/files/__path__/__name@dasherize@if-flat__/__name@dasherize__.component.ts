import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="margin-bottom: 16px;">
      <dw-input-group dwAddOnBefore="Http://" dwAddOnAfter=".com">
        <input type="text" dw-input [(ngModel)]="inputValue">
      </dw-input-group>
    </div>
    <div style="margin-bottom: 16px;">
      <dw-input-group [dwAddOnBefore]="addOnBeforeTemplate" [dwAddOnAfter]="addOnAfterTemplate">
        <input type="text" dw-input [(ngModel)]="inputValue">
      </dw-input-group>
      <ng-template #addOnBeforeTemplate>
        <dw-select [ngModel]="'Http://'">
          <dw-option [dwLabel]="'Http://'" [dwValue]="'Http://'"></dw-option>
          <dw-option [dwLabel]="'Https://'" [dwValue]="'Https://'"></dw-option>
        </dw-select>
      </ng-template>
      <ng-template #addOnAfterTemplate>
        <dw-select [ngModel]="'.com'">
          <dw-option [dwLabel]="'.com'" [dwValue]="'.com'"></dw-option>
          <dw-option [dwLabel]="'.jp'" [dwValue]="'.jp'"></dw-option>
          <dw-option [dwLabel]="'.cn'" [dwValue]="'.cn'"></dw-option>
          <dw-option [dwLabel]="'.org'" [dwValue]="'.org'"></dw-option>
        </dw-select>
      </ng-template>
    </div>
    <div style="margin-bottom: 16px;">
      <dw-input-group dwAddOnAfterIcon="anticon anticon-setting">
        <input type="text" dw-input [(ngModel)]="inputValue">
      </dw-input-group>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string = 'my site';
}
