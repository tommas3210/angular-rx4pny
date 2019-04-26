import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-select [dwMaxMultipleCount]="3" style="width: 100%" dwMode="multiple" dwPlaceHolder="Please select" [(ngModel)]="listOfSelectedValue">
      <dw-option *ngFor="let option of listOfOption" [dwLabel]="option.label" [dwValue]="option.value"></dw-option>
    </dw-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  listOfOption = [];
  listOfSelectedValue = [ 'a10', 'c12' ];

  ngOnInit(): void {
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
}
