import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwTitle="prompt text" dwPlacement="topLeft" dw-tooltip>Align edge / 边缘对齐</button>
    <button dw-button dwTitle="prompt text" dwPlacement="topCenter" dw-tooltip>Arrow points to center / 箭头指向中心</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`button {
      margin-right: 8px;
      margin-bottom: 8px;
    }`]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
