import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwType="primary" (click)="showModal()">
      <span>Show Modal</span>
    </button>
    <dw-modal [(dwVisible)]="isVisible" dwTitle="Modal Title" (dwOnCancel)="handleCancel()" (dwOnOk)="handleOk()" [dwOkLoading]="isOkLoading">
      <p>Modal Content</p>
    </dw-modal>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles: []
})
export class <%= classify(name) %>Component {
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    window.setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
