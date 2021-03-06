import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-rate [ngModel]="0" dwAllowHalf [dwCharacter]="characterIcon"></dw-rate>
    <br>
    <dw-rate [ngModel]="0" dwAllowHalf class="large" [dwCharacter]="characterEnLetter"></dw-rate>
    <br>
    <dw-rate [ngModel]="0" dwAllowHalf [dwCharacter]="characterZhLetter"></dw-rate>
    <ng-template #characterIcon><i class="anticon anticon-heart"></i></ng-template>
    <ng-template #characterZhLetter>好</ng-template>
    <ng-template #characterEnLetter>A</ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .large ::ng-deep .ant-rate-star {
        font-size: 36px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
