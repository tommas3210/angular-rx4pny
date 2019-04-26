import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dop',
  template: `Dop`
})
export class DopComponent {
  constructor(title: Title) {
    title.setTitle('Dop');
  }
}
