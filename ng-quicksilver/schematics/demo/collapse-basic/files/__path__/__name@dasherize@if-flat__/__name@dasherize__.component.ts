import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-collapse>
      <dw-collapse-panel *ngFor="let panel of panels" [dwHeader]="panel.name" [dwActive]="panel.active" [dwDisabled]="panel.disabled">
        <p style="margin:0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
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
      disabled  : false
    },
    {
      active  : false,
      disabled: false,
      name    : 'This is panel header 2'
    },
    {
      active  : false,
      disabled: true,
      name    : 'This is panel header 3'
    }
  ];
}