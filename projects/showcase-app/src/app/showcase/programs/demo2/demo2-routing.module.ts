import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dw-mock-demo'
  },
  {
    path: 'dw-mock-demo',
    loadChildren: './mock-demo/mock-demo.module#ShowcaseMockDemoModule'
  },
  {
    path: 'dw-messages',
    loadChildren: './messages/messages.module#ShowcaseMessagesModule'
  },
  {
    path: 'input-listwin',
    loadChildren: './input-listwin/input-listwin.module#InputListwinModule'
  },
  {
    path: 'form-items',
    loadChildren: './form-items/demo-form-items.module#DemoFormItemsModule'
  },
  {
    path: 'demo-theme',
    loadChildren: './theme/demo-theme.module#DemoThemeModule'
  },
  {
    path: 'language-style',
    loadChildren: './language-style/language-style.module#LanguageStyleModule'
  },
  {
    path: 'ag-grid',
    loadChildren: './ag-grid/ag-grid-demo.module#DwAgGridDemoModule'
  },
  {
    path: 'pagination',
    loadChildren: './pagination/pagination-demo.module#PaginationDemoModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demo2RoutingModule { }
