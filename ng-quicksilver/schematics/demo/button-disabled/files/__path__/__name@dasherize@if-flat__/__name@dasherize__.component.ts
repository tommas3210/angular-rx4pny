import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwType="primary">Primary</button>
    <button dw-button dwType="primary" disabled>Primary(disabled)</button>
    <br>
    <button dw-button dwType="default">Default</button>
    <button dw-button dwType="default" disabled>Default(disabled)</button>
    <br>
    <button dw-button dwType="dashed">Dashed</button>
    <button dw-button dwType="dashed" disabled>Dashed(disabled)</button>
    <div style="padding: 8px 8px 0px; background: rgb(190, 200, 200);">
      <button dw-button dwGhost>Ghost</button>
      <button dw-button dwGhost disabled>Ghost(disabled)</button>
    </div>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      [dw-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
