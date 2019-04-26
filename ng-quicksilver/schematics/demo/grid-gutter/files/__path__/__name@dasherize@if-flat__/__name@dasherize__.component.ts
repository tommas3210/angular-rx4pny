import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div class="gutter-example">
      <div dw-row dwGutter="16">
        <div dw-col class="gutter-row" dwSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
        <div dw-col class="gutter-row" dwSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
        <div dw-col class="gutter-row" dwSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
        <div dw-col class="gutter-row" dwSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
      </div>
    </div>
    <div class="gutter-example">
      <div dw-row [dwGutter]="{ xs: 8, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8 }">
        <div dw-col class="gutter-row" dwSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
        <div dw-col class="gutter-row" dwSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
        <div dw-col class="gutter-row" dwSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
        <div dw-col class="gutter-row" dwSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .gutter-box {
        background: #00A0E9;
        padding: 5px 0;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
