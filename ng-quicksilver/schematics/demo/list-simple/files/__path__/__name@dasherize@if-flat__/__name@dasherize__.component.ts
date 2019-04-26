import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <h3 [ngStyle]="{'margin-bottom.px': 16 }">Default Size</h3>
  <dw-list [dwDataSource]="data" dwBordered
           [dwHeader]="'Header'" [dwFooter]="'Footer'"
           [dwRenderItem]="item">
    <ng-template #item let-item><dw-list-item [dwContent]="item"></dw-list-item></ng-template>
  </dw-list>
  <h3 [ngStyle]="{'margin': '16px 0' }">Small Size</h3>
  <dw-list [dwDataSource]="data" dwBordered dwSize="small"
           [dwHeader]="'Header'" [dwFooter]="'Footer'"
           [dwRenderItem]="item">
    <ng-template #item let-item><dw-list-item [dwContent]="item"></dw-list-item></ng-template>
  </dw-list>
  <h3 [ngStyle]="{'margin': '16px 0' }">Large Size</h3>
  <dw-list [dwDataSource]="data" dwBordered dwSize="large"
           [dwHeader]="'Header'" [dwFooter]="'Footer'"
           [dwRenderItem]="item">
    <ng-template #item let-item><dw-list-item [dwContent]="item"></dw-list-item></ng-template>
  </dw-list>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];
}
