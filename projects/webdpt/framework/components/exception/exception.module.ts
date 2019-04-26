import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgQuicksilverModule } from 'ng-quicksilver';

import { DwExceptionComponent } from './exception.component';
import { DwExceptionService } from './exception.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgQuicksilverModule,
    TranslateModule
  ],
  declarations: [DwExceptionComponent],
  entryComponents: [DwExceptionComponent],
  providers: [DwExceptionService],
  exports: [DwExceptionComponent]
})
export class DwExceptionModule { }
