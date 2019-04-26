import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-rate [(ngModel)]="value" dwAllowHalf></dw-rate>
    <span class="ant-rate-text">allowClear: true</span>
    <br>
    <dw-rate [(ngModel)]="value" dwAllowHalf [dwAllowClear]="false"></dw-rate>
    <span class="ant-rate-text">allowClear: false</span>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  value = 0;
}
