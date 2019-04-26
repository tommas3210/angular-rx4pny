import { Component } from '@angular/core';
import { DwMessageService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button [dwType]="'default'" (click)="createBasicMessage()">Display a loading indicator</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {

  constructor(private message: DwMessageService) {
  }

  createBasicMessage(): void {
    const id = this.message.loading('Action in progress..', { dwDuration: 0 }).messageId;
    setTimeout(_ => {
      this.message.remove(id);
    }, 2500);
  }
}
