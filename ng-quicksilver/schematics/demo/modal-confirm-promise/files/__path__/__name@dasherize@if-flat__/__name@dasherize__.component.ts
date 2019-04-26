import { Component } from '@angular/core';
import { DwModalRef, DwModalService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwType="info" (click)="showConfirm()">Confirm</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  confirmModal: DwModalRef; // For testing by now

  constructor(private modal: DwModalService) { }

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      dwTitle: 'Do you Want to delete these items?',
      dwContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      dwOnOk: () => new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'))
    });
  }
}
