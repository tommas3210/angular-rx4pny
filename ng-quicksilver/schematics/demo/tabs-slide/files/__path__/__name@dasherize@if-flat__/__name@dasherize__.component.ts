import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-radio-group [(ngModel)]="dwTabPosition">
      <label dw-radio-button [dwValue]="'top'">Horizontal</label>
      <label dw-radio-button [dwValue]="'left'">Vertical</label>
    </dw-radio-group>
    <dw-input-number style="float:right;" [dwMin]="0" [dwMax]="10" [(ngModel)]="selectedIndex"></dw-input-number>
    <dw-tabset
      style="height:220px;"
      [dwTabPosition]="dwTabPosition"
      [(dwSelectedIndex)]="selectedIndex"
      (dwSelectChange)="log([$event])">
      <dw-tab
        *ngFor="let tab of tabs"
        [dwTitle]="tab.name"
        (dwSelect)="log(['select',tab])"
        (dwClick)="log(['click',tab])"
        (dwDeselect)="log(['deselect',tab])">
        {{ tab.content }}
      </dw-tab>
    </dw-tabset>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component implements OnInit {
  tabs = [];
  dwTabPosition = 'top';
  selectedIndex = 0;

  /* tslint:disable-next-line:no-any */
  log(args: any[]): void {
    console.log(args);
  }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) {
      this.tabs.push({
        name   : `Tab ${i}`,
        content: `Content of tab ${i}`
      });
    }
  }
}
