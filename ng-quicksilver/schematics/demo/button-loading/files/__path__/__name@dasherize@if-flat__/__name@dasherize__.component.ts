import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwType="primary" dwLoading><i class="anticon anticon-poweroff"></i>Loading</button>
    <button dw-button dwType="primary" dwSize="small" dwLoading>Loading</button>
    <br>
    <button dw-button dwType="primary" (click)="loadOne()" [dwLoading]="isLoadingOne">Click me!</button>
    <button dw-button dwType="primary" (click)="loadTwo()" [dwLoading]="isLoadingTwo"><i class="anticon anticon-poweroff"></i>Click me!</button>
    <br>
    <button dw-button dwLoading dwShape="circle"></button>
    <button dw-button dwLoading dwType="primary" dwShape="circle"></button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      [dw-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  isLoadingOne = false;
  isLoadingTwo = false;

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(_ => {
      this.isLoadingOne = false;
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(_ => {
      this.isLoadingTwo = false;
    }, 5000);
  }
}
