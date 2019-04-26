import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  DwDropdownContextComponent,
  DwDropdownService,
  DwFormatEmitEvent,
  DwTreeComponent,
  DwTreeNode
} from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tree
      #treeCom
      [dwData]="nodes"
      dwMultiple="true"
      (dwClick)="activeNode($event)"
      (dwDblClick)="openFolder($event)">
      <ng-template #contextTemplate>
        <ul dw-menu dwInDropDown>
          <li dw-menu-item (click)="selectDropdown('file')">新建文件</li>
          <li dw-menu-item (click)="selectDropdown('folder')">新建文件夹</li>
        </ul>
      </ng-template>
      <ng-template #dwTreeTemplate let-node>
        <span class="custom-node" [class.active]="activedNode?.key===node.key">
          <span *ngIf="!node.isLeaf" (contextmenu)="contextMenu($event,contextTemplate)">
            <i class="anticon" [ngClass]="node.isExpanded ? 'anticon-folder-open' : 'anticon-folder'" (click)="openFolder(node)"></i>
            <span class="folder-name">{{node.title}}</span>
            <span class="folder-desc">created by {{node?.origin?.author | lowercase}}</span>
          </span>
          <span *ngIf="node.isLeaf">
            <i class="anticon anticon-file"></i>
            <span class="file-name">{{node.title}}</span>
            <span class="file-desc">modified by {{node?.origin?.author | lowercase}}</span>
          </span>
        </span>
      </ng-template>
    </dw-tree>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    :host ::ng-deep .ant-tree {
      overflow: hidden;
      margin: 0 -24px;
      padding: 0 24px;
    }

    :host ::ng-deep .ant-tree li {
      padding: 4px 0 0 0;
    }

    .custom-node {
      cursor: pointer;
      line-height: 24px;
      margin-left: 4px;
      display: inline-block;
      margin: 0 -1000px;
      padding: 0 1000px;
    }

    .active {
      background: #1890FF;
      color: #fff;
    }

    .file-name, .folder-name {
      margin-left: 4px;
    }

    .file-desc, .folder-desc {
      padding: 0 8px;
      display: inline-block;
      background: #87CEFF;
      color: #FFFFFF;
      position: relative;
      left: 12px;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
  @ViewChild('treeCom') treeCom: DwTreeComponent;
  dropdown: DwDropdownContextComponent;
  // actived node
  activedNode: DwTreeNode;
  nodes = [ {
    title   : 'parent 0',
    key     : '100',
    author  : 'NG ZORRO',
    expanded: true,
    children: [
      { title: 'leaf 0-0', key: '1000', author: 'NG ZORRO', isLeaf: true },
      { title: 'leaf 0-1', key: '1001', author: 'NG ZORRO', isLeaf: true }
    ]
  }, {
    title   : 'parent 1',
    key     : '101',
    author  : 'NG ZORRO',
    children: [
      { title: 'leaf 1-0', key: '1010', author: 'NG ZORRO', isLeaf: true },
      { title: 'leaf 1-1', key: '1011', author: 'NG ZORRO', isLeaf: true }
    ]
  } ];

  openFolder(data: DwTreeNode | DwFormatEmitEvent): void {
    // do something if u want
    if (data instanceof DwTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      data.node.isExpanded = !data.node.isExpanded;
    }
  }

  activeNode(data: DwFormatEmitEvent): void {
    if (this.activedNode) {
      // delete selectedNodeList(u can do anything u want)
      this.treeCom.dwTreeService.setSelectedNodeList(this.activedNode);
    }
    data.node.isSelected = true;
    this.activedNode = data.node;
    // add selectedNodeList
    this.treeCom.dwTreeService.setSelectedNodeList(this.activedNode);
  }

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.dwDropdownService.create($event, template);
  }

  selectDropdown(type: string): void {
    this.dropdown.close();
    // do something
  }

  constructor(private dwDropdownService: DwDropdownService) {
  }
}
