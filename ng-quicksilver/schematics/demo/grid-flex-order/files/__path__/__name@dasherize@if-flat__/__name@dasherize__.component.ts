import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div dw-row dwType="flex">
      <div dw-col dwSpan="6" [dwOrder]="order" *ngFor="let order of orderList;index as i">
        {{ i + 1 }} col-order-{{ order }}
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component implements OnInit {
  orderList = [ 1, 2, 3, 4 ];

  ngOnInit(): void {
    setTimeout(_ => {
      this.orderList = [ ...this.orderList.reverse() ];
    }, 10000);
  }
}
