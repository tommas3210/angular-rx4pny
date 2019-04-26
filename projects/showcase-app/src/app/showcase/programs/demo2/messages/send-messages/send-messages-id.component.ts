import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dw-showcase-send-messages-id',
  template: `
    params: {{params | json}}
    <input [(ngModel)]="binding">
    <br/>
    <button (click)="back()">Back</button>
  `
})
export class ShowcaseSendMessagesIdComponent implements OnInit {
  binding = 'hello';
  params: any;
  constructor(private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(params => {
      this.params = params;
    });
  }

  back(): void {
    this.router.navigateByUrl('/dw-demo2/dw-messages');
  }
  ngOnInit(): void {
  }

}
