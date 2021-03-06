import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `

    <dw-row>
      <dw-col dwSpan="12">
        <dw-slider [dwMin]="1" [dwMax]="20" [(ngModel)]="value1"></dw-slider>
      </dw-col>
      <div dw-col dwSpan="4">
        <dw-input-number [dwMin]="1" [dwMax]="20" [ngStyle]="{ 'marginLeft': '16px' }" [(ngModel)]="value1"></dw-input-number>
      </div>
    </dw-row>

    <dw-row>
      <dw-col dwSpan="12">
        <dw-slider [dwMin]="0" [dwMax]="1" [dwStep]="0.01" [(ngModel)]="value2"></dw-slider>
      </dw-col>
      <dw-col dwSpan="4">
        <dw-input-number [dwMin]="0" [dwMax]="1" [ngStyle]="{ marginLeft: '16px' }" [dwStep]="0.01" [(ngModel)]="value2"></dw-input-number>
      </dw-col>
    </dw-row>

  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {

  value1 = 1;
  value2 = 0;

}
