import { Component, OnInit } from '@angular/core';
import { DwFormatEmitEvent, DwTreeNode } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tree
      [dwData]="nodes"
      dwCheckable="true"
      dwMultiple="true"
      [dwCheckedKeys]="defaultCheckedKeys"
      [dwExpandedKeys]="defaultExpandedKeys"
      [dwSelectedKeys]="defaultSelectedKeys"
      (dwClick)="dwEvent($event)"
      (dwExpandChange)="dwEvent($event)"
      (dwCheckBoxChange)="dwEvent($event)">
    </dw-tree>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component implements OnInit {
  defaultCheckedKeys = [ '0-0-0' ];
  defaultSelectedKeys = [];
  defaultExpandedKeys = [ '0-0', '0-0-0', '0-0-1' ];

  nodes = [ {
    title   : '0-0',
    key     : '0-0',
    expanded: true,
    children: [ {
      title   : '0-0-0',
      key     : '0-0-0',
      children: [
        { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
        { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
        { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
      ]
    }, {
      title   : '0-0-1',
      key     : '0-0-1',
      children: [
        { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
        { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
        { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
      ]
    }, {
      title : '0-0-2',
      key   : '0-0-2',
      isLeaf: true
    } ]
  }, {
    title   : '0-1',
    key     : '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
      { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
      { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
    ]
  }, {
    title : '0-2',
    key   : '0-2',
    isLeaf: true
  } ];

  dwEvent(event: DwFormatEmitEvent): void {
    console.log(event);
  }

  ngOnInit(): void {
  }
}
