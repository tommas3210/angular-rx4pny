import { Injectable } from '@angular/core';

import { IDwMenu } from '../interface/menu.interface';
import { DwProgramExecuteService } from '../../../program-info/program-execute.service';

@Injectable()
export class DwMenuExecuteService {

  constructor(
    private dwProgramExecuteService: DwProgramExecuteService
  ) {
  }

  // 點選Menu
  menuClick(menuItem: IDwMenu): void {
    let programId = '';

    if (menuItem.hasOwnProperty('programId')) {
      programId = menuItem.programId;
    }

    switch (menuItem.type) {
      case 'category':
        break;
      case 'program':
        // 執行作業
        this.dwProgramExecuteService.byMenu(menuItem.id, programId);
        break;
      case 'fineReport':
        this.dwProgramExecuteService.byMenu(menuItem.id, programId);
        break;
      case 'externalUrl':
        if (menuItem.openMode === 'iframe') {
          this.dwProgramExecuteService.byMenu(menuItem.id, programId);
        } else {
          if (menuItem.url !== '') {
            // 另開外部網頁
            window.open(menuItem.url);
          }
        }

        break;
      default:
    }
  }
}
