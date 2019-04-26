import { Component, OnInit } from '@angular/core';
import { DwMessageService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-transfer
      [dwDataSource]="list"
      dwShowSearch
      [dwFilterOption]="filterOption"
      (dwSearchChange)="search($event)"
      (dwSelectChange)="select($event)"
      (dwChange)="change($event)">
    </dw-transfer>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  // tslint:disable-next-line:no-any
  list: any[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key        : i.toString(),
        title      : `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction  : Math.random() * 2 > 1 ? 'right' : ''
      });
    }
  }

  // tslint:disable-next-line:no-any
  filterOption(inputValue: string, item: any): boolean {
    return item.description.indexOf(inputValue) > -1;
  }

  search(ret: {}): void {
    console.log('dwSearchChange', ret);
  }

  select(ret: {}): void {
    console.log('dwSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('dwChange', ret);
  }
}
