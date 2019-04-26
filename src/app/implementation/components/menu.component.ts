import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  template: `
    <h1>Menu</h1>
    <dw-card dwTitle="CBE"
             ngx-analyticsOn="click"
             angularticsAction="Click"
             [angularticsProperties]="{event: 'ClickProduct'}"
             angularticsLabel="CBE"
             angularticsValue="CBE"
             [angularticsCategory]="'檢視產品'"
             (click)="viewProduct('CBE')"
    ></dw-card>
    <dw-card dwTitle="DOP"
             ngx-analyticsOn="click"
             angularticsAction="Click"
             [angularticsProperties]="{event: 'ClickProduct'}"
             angularticsLabel="檢視DOP"
             angularticsValue="DOP"
             [angularticsCategory]="'檢視產品'"
             (click)="viewProduct('DOP')"
    ></dw-card>
    <dw-card dwTitle="InvDx"
             ngx-analyticsOn="click"
             angularticsAction="Click"
             [angularticsProperties]="{event: 'ClickProduct'}"
             angularticsLabel="檢視InvDx"
             angularticsValue="InvDx"
             [angularticsCategory]="'檢視產品'"
             (click)="viewProduct('InvDx')"
    ></dw-card>
    <dw-card dwTitle="HR"
             ngx-analyticsOn="click"
             angularticsAction="Click"
             [angularticsProperties]="{event: 'ClickProduct'}"
             angularticsLabel="檢視HR"
             angularticsValue="HR"
             [angularticsCategory]="'檢視產品'"
             (click)="viewProduct('HR')"
    ></dw-card>
  `,
  styles: [
      `
      dw-card:hover {
        border-color: black;
      }

      dw-card {
        margin: 20px;
        width: 200px;
        float: left;
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent {
  constructor(private router: Router) {
  }

  viewProduct(productId: string): void {
    let url = '';
    switch (productId) {
      case 'CBE':
        url = '/cbe';
        break;
      case 'DOP':
        url = '/dop';
        break;
      case 'InvDx':
        url = 'invdx';
        break;
      case 'HR':
        url = 'hr';
        break;
    }
    this.router.navigateByUrl(url);
  }
}
