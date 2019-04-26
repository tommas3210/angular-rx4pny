import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <p>The selected option's age is {{selectedValue?.age}}</p>
    <br>
    <dw-select style="width: 120px;" [compareWith]="compareFn" [(ngModel)]="selectedValue" (ngModelChange)="log($event)" dwAllowClear dwPlaceHolder="Choose">
      <dw-option *ngFor="let option of optionList" [dwValue]="option" [dwLabel]="option.label"></dw-option>
    </dw-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  optionList = [
    { label: 'Lucy', value: 'lucy', age: 20 },
    { label: 'Jack', value: 'jack', age: 22 }
  ];
  selectedValue = { label: 'Jack', value: 'jack', age: 22 };
  // tslint:disable-next-line:no-any
  compareFn = (o1: any, o2: any) => o1 && o2 ? o1.value === o2.value : o1 === o2;

  log(value: { label: string, value: string, age: number }): void {
    console.log(value);
  }
}
