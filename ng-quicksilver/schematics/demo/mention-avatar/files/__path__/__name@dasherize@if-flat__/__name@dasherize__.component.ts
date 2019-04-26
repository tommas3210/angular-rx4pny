import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
  <dw-mention
    [dwSuggestions]="webFrameworks"
    [dwValueWith]="valueWith"
    (dwOnSelect)="onSelect($event)">
    <input
      dw-input
      dwMentionTrigger
      [(ngModel)]="inputValue">
    <ng-container *dwMentionSuggestion="let framework">
      <dw-avatar dwSize="small" [dwText]="framework.name" [dwSrc]="framework.icon"></dw-avatar>
      <span>{{ framework.name }} - {{ framework.type }}</span>
    </ng-container>
  </dw-mention>
`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .ant-avatar.ant-avatar-sm {
      width: 14px;
      height: 14px;
      margin-right: 8px;
      position: relative
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  webFrameworks = [
    { name: 'React', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' },
    { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' },
    { name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' },
    { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' },
  ];

  valueWith = data => data.name;

  onSelect(value: string): void {
    console.log(value);
  }
}
