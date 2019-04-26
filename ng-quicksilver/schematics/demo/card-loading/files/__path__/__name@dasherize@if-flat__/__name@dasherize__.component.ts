import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-switch [(ngModel)]="loading"></dw-switch>
    <dw-card
      style="width: 300px;margin-top: 16px"
      [dwLoading]="loading">
      <dw-card-meta [dwAvatar]="avatarTemplate" dwTitle="Card title" dwDescription="This is the description"></dw-card-meta>
    </dw-card>
    <dw-card
      style="width: 300px;margin-top: 16px"
      [dwActions]="[actionSetting,actionEdit,actionEllipsis]">
      <dw-skeleton [dwActive]="true" [dwLoading]="loading" [dwAvatar]="{size: 'large'}">
        <dw-card-meta [dwAvatar]="avatarTemplate" dwTitle="Card title" dwDescription="This is the description"></dw-card-meta>
      </dw-skeleton>
    </dw-card>
    <ng-template #avatarTemplate>
      <dw-avatar dwSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></dw-avatar>
    </ng-template>
    <ng-template #actionSetting>
      <i class="anticon anticon-setting"></i>
    </ng-template>
    <ng-template #actionEdit>
      <i class="anticon anticon-edit"></i>
    </ng-template>
    <ng-template #actionEllipsis>
      <i class="anticon anticon-ellipsis"></i>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  loading = true;
}
