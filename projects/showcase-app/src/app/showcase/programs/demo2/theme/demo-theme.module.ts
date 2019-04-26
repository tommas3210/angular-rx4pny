import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgQuicksilverModule } from 'ng-quicksilver';
import { DemoThemeComponent } from './demo-theme/demo-theme.component';
import { DwLanguageService, DwAuthGuardService } from '@webdpt/framework';
import { ThemeBaseComponent } from './demo-theme/theme-base/theme-base.component';
import { ThemePopComponent } from './demo-theme/theme-pop/theme-pop.component';
import { ThemeButtonTemplateComponent } from './demo-theme/theme-button-template/theme-button.template';
import { ColorSketchModule } from 'ngx-color/sketch';
import { HighlightModule } from 'ngx-highlightjs';
import { ShowcaseSharedModule } from '../../../shared/shared.module';

const ROUTES: Routes = [
  {
    path: '',
    component: DemoThemeComponent,
    canActivate: [DwAuthGuardService],
    data: {
      dwRouteData: {
        programId: 'dw-demo-theme',
        dwAuthId: 'dw-demo-theme'
      }
    },
    resolve: {
      transaction: DwLanguageService
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    NgQuicksilverModule,
    ShowcaseSharedModule,
    RouterModule.forChild(ROUTES),
    ColorSketchModule,
    HighlightModule.forRoot({ theme: 'agate' })
  ],
  declarations: [DemoThemeComponent, ThemeBaseComponent, ThemePopComponent, ThemeButtonTemplateComponent],
  entryComponents: [ThemeBaseComponent, ThemePopComponent, ThemeButtonTemplateComponent]
})
export class DemoThemeModule { }
