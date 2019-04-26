import { Component, OnInit, ViewChild } from '@angular/core';
import { DwFormatEmitEvent, DwTreeNode } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-input-group [dwSuffix]="suffixIcon">
      <input type="text" dw-input placeholder="Search" [(ngModel)]="searchValue">
    </dw-input-group>
    <ng-template #suffixIcon>
      <i class="anticon anticon-search"></i>
    </ng-template>
    <dw-tree
      #treeCom
      [dwData]="nodes"
      [dwSearchValue]="searchValue"
      (dwClick)="dwEvent($event)"
      (dwExpandChange)="dwEvent($event)"
      (dwSearchValueChange)="dwEvent($event)">
    </dw-tree>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    dw-input-group {
      padding: 10px 0;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component implements OnInit {
  @ViewChild('treeCom') treeCom;
  searchValue;

  nodes = [ {
    title   : '0-0',
    key     : '0-0',
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
    console.log(event, this.treeCom.getMatchedNodeList().map(v => v.title));
  }

  ngOnInit(): void {
  }
}
