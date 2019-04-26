import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-collapse dwAccordion>
      <dw-collapse-panel *ngFor="let panel of panels" [dwHeader]="panel.name" [dwActive]="panel.active">
        <p>{{panel.name}} content</p>
      </dw-collapse-panel>
    </dw-collapse>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  panels = [
    {
      active    : true,
      name      : 'This is panel header 1',
      childPanel: [
        {
          active: false,
          name  : 'This is panel header 1-1'
        }
      ]
    },
    {
      active: false,
      name  : 'This is panel header 2'
    },
    {
      active: false,
      name  : 'This is panel header 3'
    }
  ];
}
