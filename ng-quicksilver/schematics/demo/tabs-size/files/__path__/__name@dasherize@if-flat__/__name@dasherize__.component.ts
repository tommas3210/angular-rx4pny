import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-radio-group [(ngModel)]="size">
      <label dw-radio-button dwValue="small"><span>Small</span></label>
      <label dw-radio-button dwValue="default"><span>Default</span></label>
      <label dw-radio-button dwValue="large"><span>Large</span></label>
    </dw-radio-group>
    <dw-tabset [dwSize]="size">
      <dw-tab *ngFor="let tab of tabs" [dwTitle]="'Tab' + tab">
        Content of tab {{ tab }}
      </dw-tab>
    </dw-tabset>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  size = 'small';
  tabs = [ 1, 2, 3 ];
}
