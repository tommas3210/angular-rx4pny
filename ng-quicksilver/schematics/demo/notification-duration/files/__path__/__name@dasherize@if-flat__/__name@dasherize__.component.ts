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
  createBasicNotification(): void {
    this.notification.blank('Notification Title', 'I will never close automatically. I will be close automatically. I will never close automatically.', { dwDuration: 0 });
  }

  constructor(private notification: DwNotificationService) {
  }
}
