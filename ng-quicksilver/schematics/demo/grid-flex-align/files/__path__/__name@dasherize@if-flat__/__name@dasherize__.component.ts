import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <p>Align Top</p>
      <div dw-row dwType="flex" dwJustify="center" dwAlign="top">
        <div dw-col dwSpan="4"><p class="height-100">col-4</p></div>
        <div dw-col dwSpan="4"><p class="height-50">col-4</p></div>
        <div dw-col dwSpan="4"><p class="height-120">col-4</p></div>
        <div dw-col dwSpan="4"><p class="height-80">col-4</p></div>
      </div>
      <p>Align Center</p>
      <div dw-row dwType="flex" dwJustify="space-around" dwAlign="middle">
        <div dw-col dwSpan="4"><p class="height-100">col-4</p></div>
        <div dw-col dwSpan="4"><p class="height-50">col-4</p></div>
        <div dw-col dwSpan="4"><p class="height-120">col-4</p></div>
        <div dw-col dwSpan="4"><p class="height-80">col-4</p></div>
      </div>
      <p>Align Bottom</p>
      <div dw-row dwType="flex" dwJustify="space-between" dwAlign="bottom">
        <div dw-col dwSpan="4"><p class="height-100">col-4</p></div>
        <div dw-col dwSpan="4"><p class="height-50">col-4</p></div>
        <div dw-col dwSpan="4"><p class="height-120">col-4</p></div>
        <div dw-col dwSpan="4"><p class="height-80">col-4</p></div>
      </div>
    </div>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}
