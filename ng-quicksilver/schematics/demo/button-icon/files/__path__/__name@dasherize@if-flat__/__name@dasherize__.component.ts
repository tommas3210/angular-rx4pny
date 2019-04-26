import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwType="primary" dwShape="circle"><i class="anticon anticon-search"></i></button>
    <button dw-button dwType="primary"><i class="anticon anticon-search"></i>Search</button>
    <button dw-button dwType="default" dwShape="circle"><i class="anticon anticon-search"></i></button>
    <button dw-button dwType="default"><i class="anticon anticon-search"></i>Search</button>
    <br>
    <button dw-button dwType="default" dwShape="circle"><i class="anticon anticon-search"></i></button>
    <button dw-button dwType="default"><i class="anticon anticon-search"></i>Search</button>
    <button dw-button dwType="dashed" dwShape="circle"><i class="anticon anticon-search"></i></button>
    <button dw-button dwType="dashed"><i class="anticon anticon-search"></i>Search</button>
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
