import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-radio-group [(ngModel)]="size">
      <label dw-radio-button dwValue="large">Large</label>
      <label dw-radio-button dwValue="default">Default</label>
      <label dw-radio-button dwValue="small">Small</label>
    </dw-radio-group>
    <br>
    <br>
    <button dw-button [dwSize]="size" dwType="primary">Primary</button>
    <button dw-button [dwSize]="size" dwType="default">Default</button>
    <button dw-button [dwSize]="size" dwType="dashed">Dashed</button>
    <button dw-button [dwSize]="size" dwType="danger">Danger</button>
    <br>
    <button dw-button dwType="primary" [dwSize]="size" dwShape="circle"><i class="anticon anticon-download"></i>
    </button>
    <button dw-button dwType="primary" [dwSize]="size"><i class="anticon anticon-download"></i>Download</button>
    <br>
    <dw-button-group [dwSize]="size">
      <button dw-button dwType="primary"><i class="anticon anticon-left"></i>Backward</button>
      <button dw-button dwType="primary">Forward<i class="anticon anticon-right"></i></button>
    </dw-button-group>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      [dw-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }

      dw-button-group [dw-button] {
        margin-right: 0;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  size = 'large';
}
