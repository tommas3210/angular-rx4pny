import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-collapse [dwBordered]="false">
      <dw-collapse-panel *ngFor="let panel of panels" [dwHeader]="panel.name" [dwActive]="panel.active"
        [ngStyle]="panel.customStyle">
        <p>{{panel.name}} content</p>
      </dw-collapse-panel>
    </dw-collapse>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  panels = [
    {
      active     : true,
      disabled   : false,
      name       : 'This is panel header 1',
      customStyle: {
        'background'   : '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        'border'       : '0px'
      }
    },
    {
      active     : false,
      disabled   : true,
      name       : 'This is panel header 2',
      customStyle: {
        'background'   : '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        'border'       : '0px'
      }
    },
    {
      active     : false,
      disabled   : false,
      name       : 'This is panel header 3',
      customStyle: {
        'background'   : '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        'border'       : '0px'
      }
    }
  ];
}
