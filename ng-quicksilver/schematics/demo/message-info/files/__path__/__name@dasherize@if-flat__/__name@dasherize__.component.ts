import { Component } from '@angular/core';
import { DwMessageService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button [dwType]="'primary'" (click)="createBasicMessage()">Display normal message</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {

  constructor(private message: DwMessageService) {
  }

  createBasicMessage(): void {
    this.message.info('This is a normal message');
  }
}
