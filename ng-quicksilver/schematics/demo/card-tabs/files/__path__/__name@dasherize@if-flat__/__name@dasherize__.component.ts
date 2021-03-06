import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-card style="width: 100%;" dwTitle="Card title" [dwExtra]="extraTemplate">
      <dw-card-tab>
        <dw-tabset dwSize="large" [(dwSelectedIndex)]="index1">
          <dw-tab dwTitle="tab1"></dw-tab>
          <dw-tab dwTitle="tab2"></dw-tab>
        </dw-tabset>
      </dw-card-tab>
      content{{ index1 }}
    </dw-card>
    <ng-template #extraTemplate>
      <a>More</a>
    </ng-template>
    <br>
    <br>
    <dw-card style="width: 100%;">
      <dw-card-tab>
        <dw-tabset dwSize="large" [(dwSelectedIndex)]="index2">
          <dw-tab dwTitle="article"></dw-tab>
          <dw-tab dwTitle="app"></dw-tab>
          <dw-tab dwTitle="project"></dw-tab>
        </dw-tabset>
      </dw-card-tab>
      content{{ index2 }}
    </dw-card>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  index1 = 0;
  index2 = 0;
}
