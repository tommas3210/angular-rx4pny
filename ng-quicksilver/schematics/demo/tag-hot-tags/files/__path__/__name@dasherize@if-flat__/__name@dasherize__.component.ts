import { Component } from '@angular/core';

const tagsFromServer = [ 'Movie', 'Books', 'Music', 'Sports' ];

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <strong>Categories: </strong>
    <dw-tag *ngFor="let tag of hotTags" dwMode="checkable"
      [dwChecked]="selectedTags.indexOf(tag) > -1" (dwCheckedChange)="handleChange($event, tag)">
      {{ tag }}
    </dw-tag>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {

  hotTags = tagsFromServer;
  selectedTags = [];

  handleChange(checked: boolean, tag: string): void {
    if (checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }
    console.log('You are interested in: ', this.selectedTags);
  }
}
