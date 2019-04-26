import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseSharedModule } from '../shared/shared.module';
import { ShowcaseHomeRoutingModule } from './home-routing.module';
import { ShowcaseHomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    ShowcaseSharedModule,
    ShowcaseHomeRoutingModule
  ],
  declarations: [ShowcaseHomeComponent],
  exports: [RouterModule]
})
export class ShowcaseHomeModule { }
