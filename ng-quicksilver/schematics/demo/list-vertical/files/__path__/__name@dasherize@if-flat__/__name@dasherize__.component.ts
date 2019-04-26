import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-list
    [dwDataSource]="data"
    [dwItemLayout]="'vertical'"
    [dwRenderItem]="item"
    [dwPagination]="pagination">
      <ng-template #item let-item>
          <dw-list-item [dwContent]="item.content" [dwActions]="[starAction,likeAction,msgAction]" [dwExtra]="extra">
              <ng-template #starAction><i class="anticon anticon-star-o" style="margin-right: 8px;"></i> 156</ng-template>
              <ng-template #likeAction><i class="anticon anticon-like-o" style="margin-right: 8px;"></i> 156</ng-template>
              <ng-template #msgAction><i class="anticon anticon-message" style="margin-right: 8px;"></i> 2</ng-template>
              <dw-list-item-meta
                  [dwAvatar]="item.avatar"
                  [dwTitle]="dwTitle"
                  [dwDescription]="item.description">
                  <ng-template #dwTitle><a href="{{item.href}}">{{item.title}}</a></ng-template>
              </dw-list-item-meta>
              <ng-template #extra>
                  <img width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png">
              </ng-template>
          </dw-list-item>
      </ng-template>
      <ng-template #pagination>
          <dw-pagination [dwPageIndex]="1" [dwTotal]="50"></dw-pagination>
      </ng-template>
  </dw-list>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  data = new Array(5).fill({}).map((i, index) => {
    return {
      href: 'http://ant.design',
      title: `ant design part ${index}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    };
  });
}
