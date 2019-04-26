import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-radio-group [(ngModel)]="placement">
      <label dw-radio dwValue="top">top</label>
      <label dw-radio dwValue="right">right</label>
      <label dw-radio dwValue="bottom">bottom</label>
      <label dw-radio dwValue="left">left</label>
    </dw-radio-group>
    <button dw-button dwType="primary" (click)="open()">Open</button>
    <dw-drawer [dwClosable]="false" [dwVisible]="visible" [dwPlacement]="placement" dwTitle="Basic Drawer" (dwOnClose)="close()">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </dw-drawer>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component {

  visible = false;
  placement = 'left';
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
