import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgQuicksilverModule } from 'ng-quicksilver';
import { TranslateModule } from '@ngx-translate/core';

import { DwTenantBlockComponent } from './tenant-block/tenant-block.component';

@NgModule({
  imports: [
    CommonModule,
    NgQuicksilverModule,
    TranslateModule
  ],
  declarations: [DwTenantBlockComponent],
  exports: [DwTenantBlockComponent]
})
export class DwTenantModule {}
