import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-steps [dwCurrent]="1" [dwProgressDot]="progressTemplate">
      <dw-step dwTitle="Finished" dwDescription="You can hover on the dot."></dw-step>
      <dw-step dwTitle="In Progress" dwDescription="You can hover on the dot."></dw-step>
      <dw-step dwTitle="Waiting" dwDescription="You can hover on the dot."></dw-step>
      <dw-step dwTitle="Waiting" dwDescription="You can hover on the dot."></dw-step>
    </dw-steps>
    <ng-template #progressTemplate let-dot let-status="status" let-index="index">
      <dw-popover dwContent="steps {{index}} status: {{status}}">
        <span dw-popover style="margin-left: -100%;">
          <ng-template [ngTemplateOutlet]="dot"></ng-template>
        </span>
      </dw-popover>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}
