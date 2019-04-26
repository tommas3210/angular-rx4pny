import { Component, TemplateRef } from '@angular/core';
import { DwNotificationService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <ng-template #template>
      <div class="ant-notification-notice-content">
        <div class="ant-notification-notice-with-icon">
          <span class="ant-notification-notice-icon"><i class="anticon anticon-smile-circle" style="color: rgb(16, 142, 233);"></i></span>
          <div class="ant-notification-notice-message">Notification Title</div>
          <div class="ant-notification-notice-description">
            This is the content of the notification. This is the content of the notification. This is the content of the notification.
          </div>
        </div>
      </div>
    </ng-template>
    <button dw-button [dwType]="'primary'" (click)="createBasicNotification(template)">Open the notification box</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {

  constructor(private notification: DwNotificationService) {
  }

  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }
}
