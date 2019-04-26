import { Routes } from '@angular/router';

import { DwAuthGuardService } from '@webdpt/framework';
import { MenuComponent } from './components/menu.component';
import { IndexComponent } from './components/index.component';
import { LogoutComponent } from './components/logout.component';
import { LoginComponent } from './components/login.component';
import { DopComponent } from './components/dop.component';
import { CbeComponent } from './components/cbe.component';
import { InvdxComponent } from './components/invdx.component';
import { HrComponent } from './components/hr.component';
import { RegisterComponent } from './components/register.component';
import { RegisterSuccessComponent } from './components/reg-success.component';

export const IMPLEMENTATION_ROUTES: Routes = [
  {
    path: '', component: IndexComponent, pathMatch: 'prefix',
    children: [
      {path: '', component: MenuComponent},
      {path: 'dop', component: DopComponent},
      {path: 'cbe', component: CbeComponent},
      {path: 'invdx', component: InvdxComponent},
      {path: 'hr', component: HrComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'reg-success', component: RegisterSuccessComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
];
