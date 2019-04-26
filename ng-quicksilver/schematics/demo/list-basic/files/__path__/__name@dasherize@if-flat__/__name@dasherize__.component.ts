import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-list [dwDataSource]="data" [dwRenderItem]="item" [dwItemLayout]="'horizontal'">
    <ng-template #item let-item>
      <dw-list-item>
        <dw-list-item-meta
          [dwTitle]="dwTitle"
          dwAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          dwDescription="Ant Design, a design language for background applications, is refined by Ant UED Team">
          <ng-template #dwTitle>
            <a href="https://ng.ant.design">{{item.title}}</a>
          </ng-template>
        </dw-list-item-meta>
      </dw-list-item>
    </ng-template>
  </dw-list>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];
}
