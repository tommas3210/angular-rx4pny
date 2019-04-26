import { Component } from '@angular/core';
import { DwNotificationService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button [dwType]="'primary'" (click)="createBasicNotification()">Open the notification box</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {

  constructor(private notification: DwNotificationService) {
  }

  createBasicNotification(): void {
    this.notification.blank( 'Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
  }
}
