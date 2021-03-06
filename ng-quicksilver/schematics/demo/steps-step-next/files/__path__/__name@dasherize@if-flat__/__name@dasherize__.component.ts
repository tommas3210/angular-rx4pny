import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-steps [dwCurrent]="current">
      <dw-step dwTitle="Finished"></dw-step>
      <dw-step dwTitle="In Progress"></dw-step>
      <dw-step dwTitle="Waiting"></dw-step>
    </dw-steps>

    <div class="steps-content">{{ index }}</div>
    <div class="steps-action">
      <button dw-button dwType="default" (click)="pre()" *ngIf="current > 0">
        <span>Previous</span>
      </button>
      <button dw-button dwType="default" (click)="next()" *ngIf="current < 2">
        <span>Next</span>
      </button>
      <button dw-button dwType="primary" (click)="done()" *ngIf="current === 2">
        <span>Done</span>
      </button>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .steps-content {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 200px;
        text-align: center;
        padding-top: 80px;
      }

      .steps-action {
        margin-top: 24px;
      }

      button {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  constructor() {
  }
}
