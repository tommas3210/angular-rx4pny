import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reg-success',
  template: `
    <h1>註冊成功</h1>
    <button routerLink="/login">重新登入</button>
  `
})
export class RegisterSuccessComponent {
  constructor(title: Title) {
    title.setTitle('註冊成功');
  }
}
