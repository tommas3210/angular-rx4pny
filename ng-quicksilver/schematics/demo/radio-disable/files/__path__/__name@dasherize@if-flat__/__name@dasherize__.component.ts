import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <label dw-radio [dwDisabled]="disabled">Disabled</label>
      <br>
      <label dw-radio [dwDisabled]="disabled" [ngModel]="true">Disabled</label>
      <div style="margin-top:20px;">
        <button dw-button dwType="primary" (click)="disabled=!disabled">Toggle disabled</button>
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  disabled = true;
}
