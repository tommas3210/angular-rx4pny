import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-invdx',
  template: `
    <br/>這是表單<br/>
    <button routerLink="/reg-success">送出</button>
  `
})
export class RegisterComponent {
  constructor(title: Title) {
    title.setTitle('會員註冊');
  }
}
