import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-pagination [dwPageIndex]="1" [dwTotal]="85" [dwPageSize]="20" [dwShowTotal]="totalTemplate"></dw-pagination>
    <br>
    <dw-pagination [dwPageIndex]="1" [dwTotal]="85" [dwPageSize]="20" [dwShowTotal]="rangeTemplate"></dw-pagination>
    <ng-template #totalTemplate let-total>
      Total {{total}} items
    </ng-template>
    <ng-template #rangeTemplate let-range="range" let-total>
      {{range[0]}}-{{range[1]}} of {{total}} items
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}
