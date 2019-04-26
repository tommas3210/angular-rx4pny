import { Component, OnInit, ViewChild } from '@angular/core';
import { DwFormatEmitEvent, DwTreeNode, DwTreeNodeOptions } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tree
      #treeCom
      [dwData]="nodes"
      dwCheckable="true"
      dwMultiple="true"
      [dwCheckedKeys]="defaultCheckedKeys"
      [dwExpandedKeys]="defaultExpandedKeys"
      [dwSelectedKeys]="defaultSelectedKeys"
      (dwClick)="dwClick($event)"
      (dwCheckBoxChange)="dwCheck($event)">
    </dw-tree>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component implements OnInit {
  @ViewChild('treeCom') treeCom;
  defaultCheckedKeys = [ '1001', '1002' ];
  defaultSelectedKeys = [ '10011' ];
  defaultExpandedKeys = [ '100', '1001' ];

  nodes: DwTreeNodeOptions[] = [ {
    title   : 'parent 1',
    key     : '100',
    children: [ {
      title   : 'parent 1-0',
      key     : '1001',
      disabled: true,
      children: [
        { title: 'leaf 1-0-0', key: '10010', disableCheckbox: true, isLeaf: true },
        { title: 'leaf 1-0-1', key: '10011', isLeaf: true, checked: true }
      ]
    }, {
      title   : 'parent 1-1',
      key     : '1002',
      children: [
        { title: 'leaf 1-1-0', key: '10020', isLeaf: true }
      ]
    } ]
  } ];

  dwClick(event: DwFormatEmitEvent): void {
    console.log(event, event.selectedKeys, event.keys, event.nodes);
  }

  dwCheck(event: DwFormatEmitEvent): void {
    console.log(event, event.checkedKeys, event.keys, event.nodes);
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.treeCom.getTreeNodes(), this.treeCom.getCheckedNodeList());
    }, 500);

  }
}
