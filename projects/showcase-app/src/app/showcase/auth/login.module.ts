import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseSharedModule } from '../shared/shared.module';
import { ShowcaseLoginRoutingModule } from './login-routing.module';
import { ShowcaseLoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ShowcaseLoginRoutingModule,
    ShowcaseSharedModule
  ],
  declarations: [
    ShowcaseLoginComponent
  ]
})
export class ShowcaseLoginModule { }
