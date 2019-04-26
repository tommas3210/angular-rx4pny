import { Component } from '@angular/core';
import { DwNotificationService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-select [(ngModel)]="placement" style="width: 120px; margin-right: 10px;" (ngModelChange)="clearBeforeNotifications()">
      <dw-option dwValue="topLeft" dwLabel="topLeft"></dw-option>
      <dw-option dwValue="topRight" dwLabel="topRight"></dw-option>
      <dw-option dwValue="bottomLeft" dwLabel="bottomLeft"></dw-option>
      <dw-option dwValue="bottomRight" dwLabel="bottomRight"></dw-option>
    </dw-select>
    <button dw-button [dwType]="'primary'" (click)="createBasicNotification()">Open the notification box</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  placement = 'topRight';

  clearBeforeNotifications(): void {
    this.notification.remove();
  }

  createBasicNotification(): void {
    this.notification.config({
      dwPlacement: this.placement
    });
    this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
  }

  constructor(private notification: DwNotificationService) {
  }
}
