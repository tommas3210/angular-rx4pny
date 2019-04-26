import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-pagination [dwPageIndex]="1" [dwTotal]="500" [dwItemRender]="renderItemTemplate"></dw-pagination>
    <ng-template #renderItemTemplate let-type let-page="page">
      <a *ngIf="type==='pre'">Previous</a>
      <a *ngIf="type==='next'">Next</a>
      <a *ngIf="type==='page'">{{page}}</a>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}
