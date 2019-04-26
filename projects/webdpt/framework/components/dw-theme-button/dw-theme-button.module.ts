import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { DwThemeButtonComponent } from './dw-theme-button.component';
import { NgQuicksilverModule } from 'ng-quicksilver';
import { DwThemeDirective } from './theme/dw-theme.directive';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    NgQuicksilverModule
  ],
  entryComponents: [ ThemeComponent ],
  declarations: [DwThemeButtonComponent, DwThemeDirective, ThemeComponent],
  exports: [DwThemeButtonComponent, DwThemeDirective, ThemeComponent]
})
export class DwThemeButtonModule { }
