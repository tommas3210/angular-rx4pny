import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
    <div class="example-input">
      <dw-input-group dwSearch dwSize="large" [dwSuffix]="suffixIconButton">
        <input placeholder="input here" dw-input [(ngModel)]="inputValue" (ngModelChange)="onChange($event)" [dwAutocomplete]="auto"/>
      </dw-input-group>
      <ng-template #suffixIconButton>
        <button dw-button dwType="primary" dwSize="large" dwSearch><i class="anticon anticon-search"></i></button>
      </ng-template>
      <dw-autocomplete #auto>
        <dw-auto-option *ngFor="let option of options" [dwValue]="option.category">
          {{option.value}} 在
          <a [href]="'https://s.taobao.com/search?q=' + option.query"
             target="_blank"
             rel="noopener noreferrer">
            {{option.category}}
          </a>
          区块中
          <span class="global-search-item-count">约 {{option.count}} 个结果</span>
        </dw-auto-option>
      </dw-autocomplete>
    </div>
`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
  .global-search-item-count {
    position: absolute;
    right: 16px;
  }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  options = [];

  onChange(value: string): void {
    this.options = new Array(this.getRandomInt(15, 5)).join('.').split('.')
    .map((item, idx) => ({
      value,
      category: `${value}${idx}`,
      count: this.getRandomInt(200, 100),
    }));
  }

  private getRandomInt(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
