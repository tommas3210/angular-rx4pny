import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tag>Tag 1</dw-tag>
    <dw-tag>
      <a href="https://github.com/NG-ZORRO/ng-quicksilver">Link</a>
    </dw-tag>
    <dw-tag dwMode="closeable" (dwOnClose)="onClose($event)" (dwAfterClose)="afterClose()">Tag 2</dw-tag>
    <dw-tag dwMode="closeable" (dwOnClose)="preventDefault($event)">Prevent Default</dw-tag>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {

  onClose(e: MouseEvent): void {
    console.log('tag was closed.');
  }

  afterClose(): void {
    console.log('after tag closed');
  }

  preventDefault(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    console.log('tag can not be closed.');
  }
}
