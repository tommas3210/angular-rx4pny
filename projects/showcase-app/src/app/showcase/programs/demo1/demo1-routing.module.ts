import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dw-order'
  },
  {
    path: 'dw-order',
    loadChildren: './order/order.module#OrderModule'
  },
  {
    path: 'dw-document-order',
    loadChildren: './document-order/order.module#DocumentOrderModule'
  },
  {
    path: 'dw-group',
    loadChildren: './group/group.module#GroupModule'
  },
  {
    path: 'dw-asis',
    loadChildren: './asis/asis.module#AsisModule'
  },
  {
    path: 'dw-tree',
    loadChildren: './tree/tree.module#ShowcaseTreeModule'
  },
  {
    path: 'dw-gridster',
    loadChildren: './gridster/gridster.module#ShowcaseGridsterModule'
  },
  {
    path: 'dw-tree-menu',
    loadChildren: './tree-menu/tree-menu.module#TreeMenuModule'
  },
  {
    path: 'dynamic-listwin',
    loadChildren: './dynamic-listwin/dynamic-listwin.module#DynamicListwinModule'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demo1RoutingModule { }
