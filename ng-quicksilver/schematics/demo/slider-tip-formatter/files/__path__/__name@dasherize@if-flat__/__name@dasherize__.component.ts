import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-slider [dwTipFormatter]="formatter"></dw-slider>
    <dw-slider [dwTipFormatter]="null"></dw-slider>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {

  formatter(value) {
    return `${value}%`;
  }

}
