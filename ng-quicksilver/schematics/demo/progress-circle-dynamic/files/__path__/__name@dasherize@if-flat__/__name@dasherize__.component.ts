import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-progress [dwPercent]="percent" dwType="circle"></dw-progress>
    <dw-button-group>
      <button dw-button (click)="decline()"><i class="anticon anticon-minus"></i></button>
      <button dw-button (click)="increase()"><i class="anticon anticon-plus"></i></button>
    </dw-button-group>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  percent = 0;

  increase(): void {
    this.percent = this.percent + 10;
    if (this.percent > 100) {
      this.percent = 100;
    }
  }

  decline(): void {
    this.percent = this.percent - 10;
    if (this.percent < 0) {
      this.percent = 0;
    }
  }
}

