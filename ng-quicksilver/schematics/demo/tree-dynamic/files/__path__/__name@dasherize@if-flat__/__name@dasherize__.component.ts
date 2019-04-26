import { Component, OnInit } from '@angular/core';
import { DwFormatEmitEvent, DwTreeNode } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tree
      [dwData]="nodes"
      dwAsyncData="true"
      (dwClick)="dwEvent($event)"
      (dwExpandChange)="dwEvent($event)">
    </dw-tree>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component implements OnInit {
  nodes = [
    { title: 'Expand to load', key: '0' },
    { title: 'Expand to load', key: '1' },
    { title: 'Tree Node', key: '2', isLeaf: true }
  ];

  dwEvent(event: DwFormatEmitEvent): void {
    console.log(event);
    // load child async
    if (event.eventName === 'expand') {
      setTimeout(_ => {
        if (event.node.getChildren().length === 0 && event.node.isExpanded) {
          event.node.addChildren([
            { title: 'Child Node', key: `${event.node.key}-0` },
            { title: 'Child Node', key: `${event.node.key}-1` } ]);
        }
      }, 1000);
    }
  }

  ngOnInit(): void {
  }
}
