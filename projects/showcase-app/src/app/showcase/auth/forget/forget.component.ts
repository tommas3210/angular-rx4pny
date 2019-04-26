import { Component, Inject, OnInit } from '@angular/core';
import { Logo_Path, IDwForgetverificationType } from '@webdpt/framework';


@Component({
  selector: 'app-showcase-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ShowcaseForgetComponent implements OnInit {
  verificationType: Array<IDwForgetverificationType> = [];

  constructor(
    @Inject(Logo_Path) public dwLogoPath: string
  ) { }

  ngOnInit(): void {
    this.verificationType = [
      IDwForgetverificationType.EMAIL,
      IDwForgetverificationType.MOBILEPHONE
    ];
  }

}
