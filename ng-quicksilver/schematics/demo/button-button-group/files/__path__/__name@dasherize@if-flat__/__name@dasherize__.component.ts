import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <h4>Basic</h4>
    <dw-button-group>
      <button dw-button>Cancel</button>
      <button dw-button dwType="primary">OK</button>
    </dw-button-group>
    <dw-button-group>
      <button dw-button dwType="default" disabled>L</button>
      <button dw-button dwType="default" disabled>M</button>
      <button dw-button dwType="default" disabled>R</button>
    </dw-button-group>
    <dw-button-group>
      <button dw-button dwType="primary" disabled>L</button>
      <button dw-button dwType="default" disabled>M</button>
      <button dw-button dwType="default">M</button>
      <button dw-button dwType="dashed" disabled>R</button>
    </dw-button-group>
    <h4>With Icon</h4>
    <dw-button-group>
      <button dw-button dwType="primary"><i class="anticon anticon-left"></i> Go back</button>
      <button dw-button dwType="primary">Go forward<i class="anticon anticon-right"></i></button>
    </dw-button-group>
    <dw-button-group>
      <button dw-button dwType="primary"><i class="anticon anticon-cloud"></i></button>
      <button dw-button dwType="primary"><i class="anticon anticon-cloud-download"></i></button>
    </dw-button-group>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      h4 {
        margin: 16px 0;
        font-size: 14px;
        line-height: 1;
        font-weight: normal;
      }

      h4:first-child {
        margin-top: 0;
      }

      [dw-button] {
        margin-bottom: 12px;
      }

      dw-button-group {
        margin-bottom: 8px;
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
