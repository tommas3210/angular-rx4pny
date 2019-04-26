import { Component, OnInit } from '@angular/core';
import { DwFormatBeforeDropEvent, DwFormatEmitEvent, DwTreeNode } from 'ng-quicksilver';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tree
      [dwData]="nodes"
      dwDraggable="true"
      (dwExpandChange)="dwAction($event)"
      [dwBeforeDrop]="beforeDrop"
      (dwOnDragStart)="dwAction($event)"
      (dwOnDragEnter)="dwAction($event)"
      (dwOnDragLeave)="dwAction($event)"
      (dwOnDrop)="dwAction($event)"
      (dwOnDragEnd)="dwAction($event)">
    </dw-tree>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component implements OnInit {
  nodes = [ {
    title   : '0-0',
    key     : '100',
    expanded: true,
    children: [ {
      title   : '0-0-0',
      key     : '1001',
      children: [
        { title: '0-0-0-0', key: '10010', isLeaf: true },
        { title: '0-0-0-1', key: '10011', isLeaf: true }
      ]
    }, {
      title   : '0-0-1',
      key     : '1002',
      children: [
        { title: '0-0-1-0', key: '10020', isLeaf: true }
      ]
    } ]
  } ];

  dwAction(event: DwFormatEmitEvent): void {
    console.log(event);
  }

  beforeDrop(arg: DwFormatBeforeDropEvent): Observable<boolean> {
    // if insert node into another node, wait 1s
    if (arg.pos === 0) {
      return of(true).pipe(delay(1000));
    } else {
      return of(false);
    }
  }

  ngOnInit(): void {
  }
}
