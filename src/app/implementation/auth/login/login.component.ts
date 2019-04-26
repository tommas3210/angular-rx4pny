import { Component, Inject, OnInit } from '@angular/core';
import { Logo_Path } from '@webdpt/framework';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    @Inject(Logo_Path) public dwLogoPath: string,
  ) { }

  ngOnInit(): void { }

}
