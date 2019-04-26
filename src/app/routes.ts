import { Routes } from '@angular/router';

import { DW_ROUTES } from '@webdpt/framework';
import { CUSTOMIZATION_ROUTES } from './customization/customization-routes';


export const MODULE_ROUTES: Routes = [
  ...DW_ROUTES,
  ...CUSTOMIZATION_ROUTES
];
