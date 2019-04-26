// tslint:disable:no-any
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DwMessageService } from 'ng-quicksilver';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <div class="demo-infinite-container"
    infiniteScroll
    [infiniteScrollDistance]="2"
    [infiniteScrollThrottle]="50"
    (scrolled)="onScroll()"
    [scrollWindow]="false">
    <dw-list [dwDataSource]="data" [dwRenderItem]="item">
      <ng-template #item let-item>
        <dw-list-item>
          <dw-list-item-meta
              [dwTitle]="dwTitle"
              dwAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              [dwDescription]="item.email">
              <ng-template #dwTitle>
                  <a href="https://ng.ant.design">{{item.name.last}}</a>
              </ng-template>
          </dw-list-item-meta>
        </dw-list-item>
      </ng-template>
      <dw-spin *ngIf="loading && hasMore" class="demo-loading"></dw-spin>
    </dw-list>
  </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
  :host ::ng-deep .demo-infinite-container {
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    overflow: auto;
    padding: 8px 24px;
    height: 300px;
  }
  :host ::ng-deep .demo-loading {
    position: absolute;
    bottom: -40px;
    left: 50%;
  }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  data: any[] = [];
  loading = false;
  hasMore = true;

  constructor(private http: HttpClient, private msg: DwMessageService) {}

  ngOnInit(): void {
    this.getData((res: any) => this.data = res.results);
  }

  getData(callback: (res: any) => void): void {
    this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
  }

  onScroll(): void {
    if (this.loading) return;
    this.loading = true;
    if (this.data.length > 14) {
      this.msg.warning('Infinite List loaded all');
      this.hasMore = false;
      this.loading = false;
      return;
    }
    this.getData((res: any) => {
      this.data = this.data.concat(res.results);
      this.loading = false;
    });
  }
}
