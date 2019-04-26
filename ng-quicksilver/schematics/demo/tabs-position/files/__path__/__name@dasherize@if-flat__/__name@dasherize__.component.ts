import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="margin-bottom: 16px;">
      Tab position：
      <dw-select [(ngModel)]="position" style="width: 80px;">
        <dw-option
          *ngFor="let option of options"
          [dwLabel]="option.label"
          [dwValue]="option.value">
        </dw-option>
      </dw-select>
    </div>
    <dw-tabset [dwTabPosition]="position" [dwType]="'line'">
      <dw-tab *ngFor="let tab of tabs" [dwTitle]="'Tab'+ tab">
        Content of tab {{ tab }}
      </dw-tab>
    </dw-tabset>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  position = 'top';
  tabs = [ 1, 2, 3 ];
  options = [
    { value: 'top', label: 'top' },
    { value: 'left', label: 'left' },
    { value: 'right', label: 'right' },
    { value: 'bottom', label: 'bottom' }
  ];
}
