import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  <% if(inlineTemplate) { %>template: `
    <div class="example-input">
      <dw-input-group dwSize="large" [dwSuffix]="suffixIcon">
        <input placeholder="input here" dw-input [(ngModel)]="inputValue" (ngModelChange)="onChange($event)" [dwAutocomplete]="auto"/>
      </dw-input-group>
      <ng-template #suffixIcon>
        <i class="anticon anticon-search"></i>
      </ng-template>
      <dw-autocomplete #auto>
        <dw-auto-optgroup *ngFor="let group of optionGroups" [dwLabel]="groupTitle">
          <ng-template #groupTitle>
            <span>{{group.title}}
              <a class="more-link" href="https://www.google.com/search?q=ng+zorro" target="_blank">更多</a>
            </span>
          </ng-template>
          <dw-auto-option *ngFor="let option of group.children" [dwLabel]="option.title" [dwValue]="option">
            {{option.title}}
            <span class="certain-search-item-count">{{option.count}} 人  关注</span>
          </dw-auto-option>
        </dw-auto-optgroup>
      </dw-autocomplete>
    </div>
`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
  .certain-search-item-count {
    position: absolute;
    color: #999;
    right: 16px;
  }

  .more-link {
    float: right;
  }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  inputValue: string;
  optionGroups: any[];

  onChange(value: any): void {
    console.log(value);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.optionGroups = [{
        title: '话题',
        children: [{
          title: 'AntDesign',
          count: 10000
        },         {
          title: 'AntDesign UI',
          count: 10600
        }]
      },              {
        title: '问题',
        children: [{
          title: 'AntDesign UI 有多好',
          count: 60100
        },         {
          title: 'AntDesign 是啥',
          count: 30010
        }]
      },              {
        title: '文章',
        children: [{
          title: 'AntDesign 是一个设计语言',
          count: 100000
        }]
      }];
    }, 1000);
  }

}
