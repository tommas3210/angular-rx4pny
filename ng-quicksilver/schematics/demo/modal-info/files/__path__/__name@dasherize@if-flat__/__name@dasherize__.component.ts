import { Component } from '@angular/core';
import { DwModalService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button (click)="info()">Info</button>
    <button dw-button (click)="success()">Success</button>
    <button dw-button (click)="error()">Error</button>
    <button dw-button (click)="warning()">Warning</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`button {
      margin-right: 8px;
    }`]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  constructor(private modalService: DwModalService) { }

  info(): void {
    this.modalService.info({
      dwTitle: 'This is a notification message',
      dwContent: '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
      dwOnOk: () => console.log('Info OK')
    });
  }

  success(): void {
    this.modalService.success({
      dwTitle: 'This is a success message',
      dwContent: 'some messages...some messages...'
    });
  }

  error(): void {
    this.modalService.error({
      dwTitle: 'This is an error message',
      dwContent: 'some messages...some messages...'
    });
  }

  warning(): void {
    this.modalService.warning({
      dwTitle: 'This is an warning message',
      dwContent: 'some messages...some messages...'
    });
  }
}
