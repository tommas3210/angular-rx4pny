import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-carousel [dwEffect]="effect">
      <div dw-carousel-content *ngFor="let index of array"><h3>{{index}}</h3></div>
    </dw-carousel>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`[dw-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
    }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  array = [ 1, 2, 3, 4 ];
  effect = 'scrollx';

  ngOnInit() {
    setTimeout(() => {
      this.effect = 'fade';
    }, 3000);
  }
}
