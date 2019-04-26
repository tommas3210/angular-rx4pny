import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button
      dw-button
      dwType="primary"
      dw-popover
      dwTitle="Title"
      [(dwVisible)]="visible"
      (dwVisibleChange)="change($event)"
      dwTrigger="click"
      [dwContent]="contentTemplate">
      Click me
    </button>
    <ng-template #contentTemplate>
      <a (click)='clickMe()'>Close</a>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  visible: boolean;

  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }
}
