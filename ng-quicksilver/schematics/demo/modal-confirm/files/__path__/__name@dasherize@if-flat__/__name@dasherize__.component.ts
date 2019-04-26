import { Component } from '@angular/core';
import { DwModalService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwType="info" (click)="showConfirm()">Confirm</button>
    <button dw-button dwType="dashed" (click)="showDeleteConfirm()">Delete</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`button {
      margin-right: 8px;
    }`]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  constructor(private modalService: DwModalService) {
  }

  showConfirm(): void {
    this.modalService.confirm({
      dwTitle  : '<i>Do you Want to delete these items?</i>',
      dwContent: '<b>Some descriptions</b>',
      dwOnOk   : () => console.log('OK')
    });
  }

  showDeleteConfirm(): void {
    this.modalService.confirm({
      dwTitle     : 'Are you sure delete this task?',
      dwContent   : '<b style="color: red;">Some descriptions</b>',
      dwOkText    : 'Yes',
      dwOkType    : 'danger',
      dwOnOk      : () => console.log('OK'),
      dwCancelText: 'No',
      dwOnCancel  : () => console.log('Cancel')
    });
  }
}
