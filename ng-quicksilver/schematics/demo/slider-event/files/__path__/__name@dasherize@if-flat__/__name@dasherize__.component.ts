import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-slider
      [dwDefaultValue]="30"
      [(ngModel)]="singleValue" (ngModelChange)="onChange($event)"
      (dwOnAfterChange)="onAfterChange($event)"
    ></dw-slider>
    <dw-slider
      dwRange
      [dwStep]="10"
      [dwDefaultValue]="[20, 50]"
      [(ngModel)]="rangeValue" (ngModelChange)="onChange($event)"
      (dwOnAfterChange)="onAfterChange($event)"
    ></dw-slider>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {

  singleValue;
  rangeValue;

  onChange(value) {
    console.log(`onChange: ${value}`);
  }

  onAfterChange(value) {
    console.log(`onAfterChange: ${value}`);
  }

}
