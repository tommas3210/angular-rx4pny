import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-checkbox-wrapper style="width: 100%;" (dwOnChange)="log($event)">
      <div dw-row>
        <div dw-col dwSpan="8"><label dw-checkbox dwValue="A" [ngModel]="true">A</label></div>
        <div dw-col dwSpan="8"><label dw-checkbox dwValue="B">B</label></div>
        <div dw-col dwSpan="8"><label dw-checkbox dwValue="C">C</label></div>
        <div dw-col dwSpan="8"><label dw-checkbox dwValue="D">D</label></div>
        <div dw-col dwSpan="8"><label dw-checkbox dwValue="E">E</label></div>
      </div>
    </dw-checkbox-wrapper>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {

  log(value: string[]): void {
    console.log(value);
  }
}
