import { Component, Inject, OnInit } from '@angular/core';
import { Logo_Path } from '@webdpt/framework';

@Component({
  selector: 'app-showcase-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class ShowcaseLoginComponent implements OnInit {

  constructor(
    @Inject(Logo_Path) public dwLogoPath: string,
  ) { }

  ngOnInit(): void { }

}
