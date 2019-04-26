import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="background: #ECECEC;padding:30px;">
      <div dw-row [dwGutter]="8">
        <div dw-col [dwSpan]="8">
          <dw-card dwTitle="Card title">
            <p>Card content</p>
          </dw-card>
        </div>
        <div dw-col [dwSpan]="8">
          <dw-card dwTitle="Card title">
            <p>Card content</p>
          </dw-card>
        </div>
        <div dw-col [dwSpan]="8">
          <dw-card dwTitle="Card title">
            <p>Card content</p>
          </dw-card>
        </div>
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`p {
      margin: 0;
    }`]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
