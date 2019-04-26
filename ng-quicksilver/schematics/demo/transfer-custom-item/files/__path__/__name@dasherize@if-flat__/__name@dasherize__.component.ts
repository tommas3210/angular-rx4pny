import { Component, OnInit } from '@angular/core';
import { DwMessageService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-transfer
      [dwDataSource]="list"
      [dwListStyle]="{'width.px': 300, 'height.px': 300}"
      [dwRender]="render"
      (dwSelectChange)="select($event)"
      (dwChange)="change($event)">
      <ng-template #render let-item>
        <i class="anticon anticon-{{item.icon}}"></i> {{ item.title }}
      </ng-template>
    </dw-transfer>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  // tslint:disable-next-line:no-any
  list: any[] = [];

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
        direction  : Math.random() * 2 > 1 ? 'right' : '',
        icon       : `frown-o`
      });
    }
    this.list = ret;
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
