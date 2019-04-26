import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
  <dw-tabset>
      <dw-tab dwTitle="Write">
        <dw-mention
          [dwSuggestions]="suggestions">
           <textarea
              dw-input
              [dwAutosize]="{minRows: 4, maxRows: 4}"
              [(ngModel)]="inputValue"
              (ngModelChange)="renderPreView()"
              dwMentionTrigger>
            </textarea>
        </dw-mention>
      </dw-tab>
      <dw-tab dwTitle="Preview">
          <pre [innerHTML]="preview"></pre>
      </dw-tab>
    </dw-tabset>
`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string = 'Switch tab view preview @WEBDPT ';
  preview: SafeHtml;
  suggestions = ['WEBDPT', 'angular', 'Reactive-Extensions'];

  constructor(private sanitizer: DomSanitizer) {
    this.renderPreView();
  }

  getRegExp(prefix: string | string[]): RegExp {
    const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    let prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');

    if (prefixArray.length > 1) {
      prefixToken = `[${prefixToken}]`;
    }

    return new RegExp(`(\\s|^)(${prefixToken})[^\\s]*`, 'g');
  }

  renderPreView(): void {
    if (this.inputValue) {
      const regex = this.getRegExp('@');
      const previewValue = this.inputValue
      .replace(regex, match => `<a target="_blank" href="https://github.com/${match.trim().substring(1)}">${match}</a>`);
      this.preview = this.sanitizer.bypassSecurityTrustHtml(previewValue);
    }
  }
}
