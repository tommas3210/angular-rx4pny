import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-collapse>
      <dw-collapse-panel *ngFor="let panel of panels" [dwHeader]="panel.name" [dwActive]="panel.active" [dwDisabled]="panel.disabled" [dwShowArrow]="panel.arrow">
        <p style="margin:0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
      </dw-collapse-panel>
    </dw-collapse>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  panels = [
    {
      active: true,
      name  : 'This is panel header 1',
      arrow : true
    },
    {
      active: false,
      arrow : false,
      name  : 'This is panel header 2'
    }
  ];
}
