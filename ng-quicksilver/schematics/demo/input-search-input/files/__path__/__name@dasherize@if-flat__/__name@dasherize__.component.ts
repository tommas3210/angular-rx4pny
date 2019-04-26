import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-input-group dwSuffixIcon="anticon anticon-search">
      <input type="text" dw-input placeholder="input search text">
    </dw-input-group>
    <br>
    <br>
    <dw-input-group dwSearch [dwSuffix]="suffixIconButton">
      <input type="text" dw-input placeholder="input search text">
    </dw-input-group>
    <ng-template #suffixIconButton>
      <button dw-button dwType="primary" dwSearch><i class="anticon anticon-search"></i></button>
    </ng-template>
    <br>
    <br>
    <dw-input-group dwSearch dwSize="large" [dwSuffix]="suffixButton">
      <input type="text" dw-input placeholder="input search text">
    </dw-input-group>
    <ng-template #suffixButton>
      <button dw-button dwType="primary" dwSize="large" dwSearch>Search</button>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}
