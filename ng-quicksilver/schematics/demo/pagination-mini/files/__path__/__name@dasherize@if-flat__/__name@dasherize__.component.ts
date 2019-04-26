import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-pagination [(dwPageIndex)]="current" [dwTotal]="50" [dwSize]="'small'"></dw-pagination>
    <br>
    <dw-pagination [(dwPageIndex)]="current" [dwTotal]="50" [dwSize]="'small'" dwShowSizeChanger dwShowQuickJumper></dw-pagination>
    <br>
    <dw-pagination [(dwPageIndex)]="current" [dwTotal]="50" [dwSize]="'small'" [dwShowTotal]="totalTemplate"></dw-pagination>
    <ng-template #totalTemplate let-total>Total {{total}} items</ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  current = 1;
}
