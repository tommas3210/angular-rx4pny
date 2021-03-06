import { Component } from '@angular/core';

const userList = [ 'U', 'Lucy', 'Tom', 'Edward' ];
const colorList = [ '#f56a00', '#7265e6', '#ffbf00', '#00a2ae' ];

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-avatar [dwText]="text" dwSize="large" [ngStyle]="{'background-color':color}" style="vertical-align: middle;"></dw-avatar>
    <button dw-button [dwType]="'dashed'" (click)="change()" style="margin-left: 16px; vertical-align: middle;">
      <span>Change</span>
    </button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  text: string = userList[ 3 ];
  color: string = colorList[ 3 ];

  change(): void {
    let idx = userList.indexOf(this.text);
    ++idx;
    if (idx === userList.length) idx = 0;
    this.text = userList[ idx ];
    this.color = colorList[ idx ];
  }
}
