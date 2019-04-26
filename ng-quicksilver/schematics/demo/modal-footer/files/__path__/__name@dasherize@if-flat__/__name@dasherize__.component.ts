import { Component } from '@angular/core';


@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwType="primary" (click)="showModal()">
      <span>Show Modal</span>
    </button>
    <dw-modal [(dwVisible)]="isVisible" [dwTitle]="modalTitle" [dwContent]="modalContent" [dwFooter]="modalFooter" (dwOnCancel)="handleCancel()">
      <ng-template #modalTitle>
        Custom Modal Title
      </ng-template>

      <ng-template #modalContent>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
      </ng-template>

      <ng-template #modalFooter>
        <span>Modal Footer: </span>
        <button dw-button dwType="default" (click)="handleCancel()">Custom Callback</button>
        <button dw-button dwType="primary" (click)="handleOk()" [dwLoading]="isConfirmLoading">Custom Submit</button>
      </ng-template>
    </dw-modal>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles: []
})
export class <%= classify(name) %>Component {
  isVisible = false;
  isConfirmLoading = false;

  constructor() { }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
