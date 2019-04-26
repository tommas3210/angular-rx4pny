import { Component } from '@angular/core';
import { DwMessageService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <a dw-popconfirm dwTitle="Are you sure delete this task?" (dwOnConfirm)="confirm()" (dwOnCancel)="cancel()">Delete</a>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {

  cancel(): void {
    this.dwMessageService.info('click cancel');
  }

  confirm(): void {
    this.dwMessageService.info('click confirm');
  }

  constructor(private dwMessageService: DwMessageService) {

  }

}
