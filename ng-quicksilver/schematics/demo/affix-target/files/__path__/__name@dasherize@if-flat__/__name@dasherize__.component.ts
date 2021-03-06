import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <div class="scrollable-container" #target>
    <div class="background">
      <dw-affix [dwTarget]="target" id="affix-container-target">
        <button dw-button [dwType]="'primary'">
            <span>Fixed at the top of container</span>
        </button>
      </dw-affix>
    </div>
  </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
  :host ::ng-deep .scrollable-container {
    height: 100px;
    overflow-y: scroll;
  }

  :host ::ng-deep .background {
    padding-top: 60px;
    height: 300px;
    background-image: url(//zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);
  }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component { }
