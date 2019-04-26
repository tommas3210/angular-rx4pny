import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="margin-bottom: 16px;">
      <button dw-button (click)="newTab()">ADD</button>
    </div>
    <dw-tabset [dwType]="'card'" [dwSelectedIndex]="index">
      <dw-tab *ngFor="let tab of tabs" [dwTitle]="titleTemplate">
        <ng-template #titleTemplate>
          <div>{{ tab }}<i class="anticon anticon-close" (click)="closeTab(tab)"></i></div>
        </ng-template>
        Content of {{ tab }}
      </dw-tab>
    </dw-tabset>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  index = 0;
  tabs = [ 'Tab 1', 'Tab 2' ];

  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
    this.index = this.tabs.length - 1;
  }
}
