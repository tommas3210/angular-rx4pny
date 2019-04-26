import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="background: rgb(190, 200, 200);padding: 26px 16px 16px;">
      <button dw-button dwType="primary" dwGhost>Primary</button>
      <button dw-button dwType="default" dwGhost>Default</button>
      <button dw-button dwType="dashed" dwGhost>Dashed</button>
      <button dw-button dwType="danger" dwGhost>Danger</button>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      [dw-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
