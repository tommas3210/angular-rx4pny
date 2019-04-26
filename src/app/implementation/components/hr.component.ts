import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hr',
  template: `HR`
})
export class HrComponent {
  constructor(title: Title) {
    title.setTitle('HR');
  }
}
