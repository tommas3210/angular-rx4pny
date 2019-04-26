import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-list [dwDataSource]="data" [dwRenderItem]="item" [dwGrid]="{gutter: 16, span: 6}">
    <ng-template #item let-item>
      <dw-list-item [dwContent]="dwContent">
        <ng-template #dwContent>
          <dw-card [dwTitle]="item.title">
            Card content
          </dw-card>
        </ng-template>
      </dw-list-item>
    </ng-template>
  </dw-list>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];
}
