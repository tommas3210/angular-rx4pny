import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tabset [dwType]="'card'" [dwTabBarExtraContent]="extraTemplate">
      <dw-tab *ngFor="let tab of tabs" [dwTitle]="titleTemplate">
        <ng-template #titleTemplate>
          <div>
            {{ tab }}
            <i class="anticon anticon-close" (click)="closeTab(tab)"></i>
          </div>
        </ng-template>
        Content of {{ tab }}
      </dw-tab>
    </dw-tabset>
    <ng-template #extraTemplate>
      <i class="ant-tabs-new-tab anticon anticon-plus" (click)="newTab()"></i>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  tabs = [ 'Tab 1', 'Tab 2' ];

  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
  }
}
