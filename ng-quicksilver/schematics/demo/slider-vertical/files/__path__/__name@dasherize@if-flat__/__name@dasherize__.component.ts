import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div [ngStyle]="{ height: '300px' }">
      <div [ngStyle]="style">
        <dw-slider dwVertical [dwDefaultValue]="30"></dw-slider>
      </div>
      <div [ngStyle]="style">
        <dw-slider dwVertical dwRange [dwStep]="10" [dwDefaultValue]="[20, 50]"></dw-slider>
      </div>
      <div [ngStyle]="style">
        <dw-slider dwVertical dwRange [dwMarks]="marks" [dwDefaultValue]="[26, 37]"></dw-slider>
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {

  style = {
    float     : 'left',
    height    : '300px',
    marginLeft: '70px'
  };

  marks = {
    0  : '0°C',
    26 : '26°C',
    37 : '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: '<strong>100°C</strong>',
    }
  };

}
