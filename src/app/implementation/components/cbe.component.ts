import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cbe',
  template: `CBE`
})
export class CbeComponent {
  constructor(title: Title) {
    title.setTitle('CBE');
  }
}
