import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-input-group [dwSuffix]="suffixTemplate" dwPrefixIcon="anticon anticon-user">
      <input type="text" dw-input placeholder="Enter your username" [(ngModel)]="username">
    </dw-input-group>
    <ng-template #suffixTemplate><i class="anticon anticon-close-circle" (click)="username=null" *ngIf="username"></i></ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .anticon-close-circle {
        cursor: pointer;
        color: #ccc;
        transition: color 0.3s;
        font-size: 12px;
      }

      .anticon-close-circle:hover {
        color: #999;
      }

      .anticon-close-circle:active {
        color: #666;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  username: string;
}
