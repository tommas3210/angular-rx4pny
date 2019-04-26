import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="margin-left:60px;">
      <button dwTitle="prompt text" dwPlacement="topLeft" dw-button dw-tooltip>TL</button>
      <button dwTitle="prompt text" dwPlacement="top" dw-button dw-tooltip>Top</button>
      <button dwTitle="prompt text" dwPlacement="topRight" dw-button dw-tooltip>TR</button>
    </div>
    <div style="float:left;width: 60px;">
      <button dwTitle="prompt text" dwPlacement="leftTop" dw-button dw-tooltip>LT</button>
      <button dwTitle="prompt text" dwPlacement="left" dw-button dw-tooltip>Left</button>
      <button dwTitle="prompt text" dwPlacement="leftBottom" dw-button dw-tooltip>LB</button>
    </div>
    <div style="margin-left:270px;width: 60px;">
      <button dwTitle="prompt text" dwPlacement="rightTop" dw-button dw-tooltip>RT</button>
      <button dwTitle="prompt text" dwPlacement="right" dw-button dw-tooltip>Right</button>
      <button dwTitle="prompt text" dwPlacement="rightBottom" dw-button dw-tooltip>RB</button>
    </div>
    <div style="margin-left:60px;clear: both;">
      <button dwTitle="prompt text" dwPlacement="bottomLeft" dw-button dw-tooltip>BL</button>
      <button dwTitle="prompt text" dwPlacement="bottom" dw-button dw-tooltip>Bottom</button>
      <button dwTitle="prompt text" dwPlacement="bottomRight" dw-button dw-tooltip>BR</button>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      button {
        width: 70px;
        text-align: center;
        padding: 0;
        margin-right: 8px;
        margin-bottom: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
