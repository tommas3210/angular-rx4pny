import { Injectable } from '@angular/core';

import { IDwProgram } from './interface/program.interface';

@Injectable()
export class DwOperationInfoAttributeService {
  constructor(
  ) {
  }


  setAttr(item: IDwProgram): void {
    if (!item.hasOwnProperty('menuId')) {
      item.menuId = '';
    }

    if (!item.hasOwnProperty('parameter')) {
      item.parameter = [];
    }
  }
}
