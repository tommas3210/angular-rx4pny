import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-select dwMode="tags" style="width: 100%;" dwPlaceHolder="Tag Mode" [(ngModel)]="listOfTagOptions">
      <dw-option *ngFor="let option of listOfOption" [dwLabel]="option.label" [dwValue]="option.value">
      </dw-option>
    </dw-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  listOfOption = [];
  listOfTagOptions = [];

  ngOnInit(): void {
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
}
