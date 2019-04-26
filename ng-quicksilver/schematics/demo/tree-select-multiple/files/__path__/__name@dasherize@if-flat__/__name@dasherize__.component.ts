import { Component, OnInit } from '@angular/core';
import { DwFormatEmitEvent, DwTreeNode } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tree-select style="width: 250px"
      [dwNodes]="nodes"
      [dwDefaultExpandAll]="true"
      [dwAllowClear]="false"
      dwPlaceHolder="Please select"
      [(ngModel)]="value"
      [dwMultiple]="true"
      (ngModelChange)="onChange($event)">
    </dw-tree-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component implements OnInit {

  value: string[] = [];
  nodes = [ {
    title   : 'parent 1',
    key     : '100',
    children: [ {
      title   : 'parent 1-0',
      key     : '1001',
      children: [
        { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
        { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
      ]
    }, {
      title   : 'parent 1-1',
      key     : '1002',
      children: [
        { title: 'leaf 1-1-0', key: '10020', isLeaf: true }
      ]
    } ]
  } ];

  onChange($event: string[]): void {
    console.log($event);
  }

  ngOnInit(): void {
  }
}
