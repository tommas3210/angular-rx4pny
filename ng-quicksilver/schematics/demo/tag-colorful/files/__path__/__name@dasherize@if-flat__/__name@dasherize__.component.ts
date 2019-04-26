import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
    <h4 style="margin-bottom: 16px;">Presets:</h4>
    <div>
      <dw-tag [dwColor]="'magenta'">magenta</dw-tag>
      <dw-tag [dwColor]="'red'">red</dw-tag>
      <dw-tag [dwColor]="'volcano'">volcano</dw-tag>
      <dw-tag [dwColor]="'orange'">orange</dw-tag>
      <dw-tag [dwColor]="'gold'">gold</dw-tag>
      <dw-tag [dwColor]="'lime'">lime</dw-tag>
      <dw-tag [dwColor]="'green'">green</dw-tag>
      <dw-tag [dwColor]="'cyan'">cyan</dw-tag>
      <dw-tag [dwColor]="'blue'">blue</dw-tag>
      <dw-tag [dwColor]="'geekblue'">geekblue</dw-tag>
      <dw-tag [dwColor]="'purple'">purple</dw-tag>
    </div>
    <h4 style="margin: 16px 0px;'">Custom:</h4>
    <div>
      <dw-tag [dwColor]="'#f50'">#f50</dw-tag>
      <dw-tag [dwColor]="'#2db7f5'">#2db7f5</dw-tag>
      <dw-tag [dwColor]="'#87d068'">#87d068</dw-tag>
      <dw-tag [dwColor]="'#108ee9'">#108ee9</dw-tag>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .ant-tag {
      margin-bottom: 8px;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
