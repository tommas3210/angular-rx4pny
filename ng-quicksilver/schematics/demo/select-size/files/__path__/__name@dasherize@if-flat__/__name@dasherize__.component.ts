import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-radio-group [(ngModel)]="size">
      <label dw-radio-button dwValue="large"><span>Large</span></label>
      <label dw-radio-button dwValue="default"><span>Default</span></label>
      <label dw-radio-button dwValue="small"><span>Small</span></label>
    </dw-radio-group>
    <br><br>
    <dw-select style="width: 200px;" [(ngModel)]="singleValue" [dwSize]="size">
      <dw-option *ngFor="let option of listOfOption" [dwLabel]="option.label" [dwValue]="option.value"></dw-option>
    </dw-select>
    <br><br>
    <dw-select style="width: 200px;" [(ngModel)]="singleValue" [dwSize]="size" dwShowSearch>
      <dw-option *ngFor="let option of listOfOption" [dwLabel]="option.label" [dwValue]="option.value"></dw-option>
    </dw-select>
    <br><br>
    <dw-select style="width: 100%" [(ngModel)]="multipleValue" [dwSize]="size" dwMode="multiple" dwPlaceHolder="Please select">
      <dw-option *ngFor="let option of listOfOption" [dwLabel]="option.label" [dwValue]="option.value"></dw-option>
    </dw-select>
    <br><br>
    <dw-select style="width: 100%" [(ngModel)]="tagValue" [dwSize]="size" dwMode="tags" dwPlaceHolder="Please select">
      <dw-option *ngFor="let option of listOfOption" [dwLabel]="option.label" [dwValue]="option.value"></dw-option>
    </dw-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  listOfOption = [];
  size = 'default';
  singleValue = 'a10';
  multipleValue = [ 'a10', 'c12' ];
  tagValue = [ 'a10', 'c12', 'tag' ];

  ngOnInit(): void {
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
}
