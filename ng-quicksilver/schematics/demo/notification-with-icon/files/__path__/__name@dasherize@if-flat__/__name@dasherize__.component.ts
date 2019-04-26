import { Component } from '@angular/core';
import { DwNotificationService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button (click)="createNotification('success')">Success</button>
    <button dw-button (click)="createNotification('info')">Info</button>
    <button dw-button (click)="createNotification('warning')">Warning</button>
    <button dw-button (click)="createNotification('error')">Error</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      :host ::ng-deep .ant-btn {
        margin-right: 1em;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  createNotification(type: string): void {
    this.notification.create(type, 'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
  }

  constructor(private notification: DwNotificationService) {
  }
}
