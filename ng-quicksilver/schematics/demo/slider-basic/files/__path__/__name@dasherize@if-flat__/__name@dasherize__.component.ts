import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-slider [dwDefaultValue]="30" [dwDisabled]="disabled"></dw-slider>
    <dw-slider dwRange [dwDefaultValue]="[20, 50]" [dwDisabled]="disabled"></dw-slider>
    Disabled: <dw-switch dwSize="small" [(ngModel)]="disabled"></dw-switch>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {

  disabled = false;

}
