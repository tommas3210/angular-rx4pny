// tslint:disable:no-any
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DwMessageService } from 'ng-quicksilver';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-list
    class="demo-loadmore-list"
    [dwDataSource]="list"
    [dwItemLayout]="'horizontal'"
    [dwLoading]="initLoading"
    [dwRenderItem]="item"
    [dwLoadMore]="loadMore">
    <ng-template #item let-item>
      <dw-list-item [dwContent]="item.loading?'':'content'" [dwActions]="item.loading?[]:[editAction,moreAction]">
        <dw-skeleton [dwAvatar]="true" [dwActive]="true" [dwTitle]="false" [dwLoading]="item.loading">
          <ng-template #editAction><a (click)="edit(item)">edit</a></ng-template>
          <ng-template #moreAction><a (click)="edit(item)">more</a></ng-template>
          <dw-list-item-meta
            [dwTitle]="dwTitle"
            dwAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            dwDescription="Ant Design, a design language for background applications, is refined by Ant UED Team">
            <ng-template #dwTitle>
              <a href="https://ng.ant.design">{{item.name.last}}</a>
            </ng-template>
          </dw-list-item-meta>
        </dw-skeleton>
      </dw-list-item>
    </ng-template>
    <ng-template #loadMore>
      <div class="loadmore">
        <button dw-button *ngIf="!loadingMore" (click)="onLoadMore()">loading more</button>
      </div>
    </ng-template>
  </dw-list>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
  :host ::ng-deep .demo-loadmore-list {
    min-height: 350px;
  }
  :host ::ng-deep .loadmore {
    text-align: center;
    margin-top: 12px;
    height: 32px;
    line-height: 32px;
  }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  initLoading = true; // bug
  loadingMore = false;
  data = [];
  list = [];

  constructor(private http: HttpClient, private msg: DwMessageService) {}

  ngOnInit(): void {
    this.getData((res: any) => {
      this.data = res.results;
      this.list = res.results;
      this.initLoading = false;
    });
  }

  getData(callback: (res: any) => void): void {
    this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
    this.http.get(fakeDataUrl).subscribe((res: any) => {
      this.data = this.data.concat(res.results);
      this.list = [...this.data];
      this.loadingMore = false;
    });
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }
}
