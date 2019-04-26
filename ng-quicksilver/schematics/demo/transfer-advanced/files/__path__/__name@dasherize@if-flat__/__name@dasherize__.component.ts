import { Component, OnInit } from '@angular/core';
import { DwMessageService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-transfer
      [dwDataSource]="list"
      dwShowSearch
      [dwOperations]="['to right', 'to left']"
      [dwListStyle]="{'width.px': 250, 'height.px': 300}"
      [dwRender]="render"
      [dwFooter]="footer"
      (dwSelectChange)="select($event)"
      (dwChange)="change($event)">
      <ng-template #render let-item>
        {{ item.title }}-{{ item.description }}
      </ng-template>
      <ng-template #footer let-direction>
        <button dw-button (click)="reload(direction)" [dwSize]="'small'" style="float: right; margin: 5px;">reload</button>
      </ng-template>
    </dw-transfer>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  list = [];

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const ret = [];
    for (let i = 0; i < 20; i++) {
      ret.push({
        key        : i.toString(),
        title      : `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction  : Math.random() * 2 > 1 ? 'right' : ''
      });
    }
    this.list = ret;
  }

  reload(direction: string): void {
    this.getData();
    this.msg.success(`your clicked ${direction}!`);
  }

  select(ret: {}): void {
    console.log('dwSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('dwChange', ret);
  }

  constructor(public msg: DwMessageService) {
  }
}
