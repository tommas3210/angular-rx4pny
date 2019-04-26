import { Component, OnInit } from '@angular/core';
import { DwFormatEmitEvent, DwTreeNode } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tree-select style="width: 250px"
      dwPlaceHolder="Please select"
      [dwDefaultExpandedKeys]="expandKeys"
      [dwDropdownMatchSelectWidth]="true"
      [dwDropdownStyle]="{ 'max-height': '300px' }"
      [(ngModel)]="value"
      [dwNodes]="nodes"
      [dwAsyncData]="true"
      (dwExpandChange)="onExpandChange($event)">
    </dw-tree-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component implements OnInit {
  expandKeys = [ '0-0' ];
  value: string;
  nodes = [ {
    title   : 'Node1',
    value   : '0-0',
    key     : '0-0',
    children: [ {
      title: 'Child Node1',
      value: '0-0-1',
      key  : '0-0-1'
    }, {
      title: 'Child Node2',
      value: '0-0-2',
      key  : '0-0-2'
    } ]
  }, {
    title: 'Node2',
    value: '0-1',
    key  : '0-1'
  } ];

  onExpandChange(e: DwFormatEmitEvent): void {
    if (e.node.getChildren().length === 0 && e.node.isExpanded) {
      this.loadNode().then(data => {
        e.node.addChildren(data);
      });
    }
  }

  loadNode(): Promise<any[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve([
          { title: 'Child Node', key: `${(new Date()).getTime()}-0` },
          { title: 'Child Node', key: `${(new Date()).getTime()}-1` } ]),
        1000);
    });
  }

  ngOnInit(): void {
  }
}
