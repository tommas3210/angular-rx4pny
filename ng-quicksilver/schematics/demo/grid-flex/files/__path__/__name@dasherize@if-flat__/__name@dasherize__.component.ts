import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <p>sub-element align left</p>
      <div dw-row dwType="flex" dwJustify="start">
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
      </div>
      <p>sub-element align center</p>
      <div dw-row dwType="flex" dwJustify="center">
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
      </div>
      <p>sub-element align right</p>
      <div dw-row dwType="flex" dwJustify="end">
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
      </div>
      <p>sub-element monospaced arrangement</p>
      <div dw-row dwType="flex" dwJustify="space-between">
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
      </div>
      <p>sub-element align full</p>
      <div dw-row dwType="flex" dwJustify="space-around">
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
        <div dw-col dwSpan="4">col-4</div>
      </div>
    </div>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}
