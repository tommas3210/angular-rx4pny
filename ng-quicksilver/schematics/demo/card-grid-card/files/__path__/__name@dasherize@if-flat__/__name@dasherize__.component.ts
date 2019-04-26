import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-card dwTitle="Cart Title">
      <div dw-card-grid [ngStyle]="gridStyle">Content</div>
      <div dw-card-grid [ngStyle]="gridStyle">Content</div>
      <div dw-card-grid [ngStyle]="gridStyle">Content</div>
      <div dw-card-grid [ngStyle]="gridStyle">Content</div>
      <div dw-card-grid [ngStyle]="gridStyle">Content</div>
      <div dw-card-grid [ngStyle]="gridStyle">Content</div>
      <div dw-card-grid [ngStyle]="gridStyle">Content</div>
    </dw-card>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  gridStyle = {
    width    : '25%',
    textAlign: 'center'
  };
}
