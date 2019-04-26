import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // 提出去, 寫在 implementation-routing.module.ts 與 showcase-routing.module.ts 裡,
  // 以避免 與 DwLayoutDefaultComponent 所要執行的事件會衝突.
  // {
  //   path: 'sso-login',
  //   pathMatch: 'prefix',
  //   component: DwSsoLoginComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DwSsoLoginRoutingModule { }
