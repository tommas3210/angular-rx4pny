import { Component } from '@angular/core';
import { DwModalService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button (click)="success()">Success</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles: []
})
export class <%= classify(name) %>Component {
  constructor(private modalService: DwModalService) { }

  success(): void {
    const modal = this.modalService.success({
      dwTitle: 'This is a notification message',
      dwContent: 'This modal will be destroyed after 1 second'
    });

    window.setTimeout(() => modal.destroy(), 1000);
  }
}
