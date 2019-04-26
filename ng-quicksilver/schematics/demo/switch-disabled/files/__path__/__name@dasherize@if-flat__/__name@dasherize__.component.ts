import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-switch [(ngModel)]="switchValue" [dwDisabled]="isDisabled"></dw-switch>
    <br>
    <button dw-button [dwType]="'primary'" (click)="isDisabled = !isDisabled">Toggle disabled</button>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    dw-switch {
      margin-bottom: 8px;
    }`]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  switchValue = false;
  isDisabled = true;
}
