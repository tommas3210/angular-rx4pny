import { Component } from '@angular/core';
import { DwModalService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <button dw-button dwType="primary" (click)="showModal()">Modal</button>
      <dw-modal
        [(dwVisible)]="isVisible"
        dwTitle="Modal"
        dwOkText="Ok"
        dwCancelText="Cancel"
        (dwOnOk)="handleOk()"
        (dwOnCancel)="handleCancel()"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </dw-modal>
    </div>
    <br/>
    <button dw-button dwType="info" (click)="showConfirm()">Confirm</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles: []
})
export class <%= classify(name) %>Component {
  isVisible = false;

  constructor(private modalService: DwModalService) { }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showConfirm(): void {
    this.modalService.confirm({
      dwTitle: 'Confirm',
      dwContent: 'Bla bla ...',
      dwOkText: 'OK',
      dwCancelText: 'Cancel'
    });
  }
}
