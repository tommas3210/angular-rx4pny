import { Component } from '@angular/core';
import { DwMessageService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <a dw-popconfirm dwTitle="Are you sure delete this task?" [dwCondition]="switchValue" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()">Delete a task</a>
    <br>
    <br>
    Whether directly execute:
    <dw-switch [(ngModel)]="switchValue"></dw-switch>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component {
  switchValue = false;

  cancel(): void {
    this.dwMessageService.info('click cancel');
  }

  confirm(): void {
    this.dwMessageService.info('click confirm');
  }

  constructor(private dwMessageService: DwMessageService) {

  }

}
