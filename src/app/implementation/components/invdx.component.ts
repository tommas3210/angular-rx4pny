import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-invdx',
  template: `InvDx`
})
export class InvdxComponent {
  constructor(title: Title) {
    title.setTitle('InvDx');
  }
}
