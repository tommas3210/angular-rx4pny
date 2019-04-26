import { AfterViewInit, Component, Input, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { DwSubMenuComponent } from 'ng-quicksilver';

import { IDwMenu } from '../interface/menu.interface';
import { DwRecursiveMenuService } from '../service/recursive-menu.service';

@Component({
  selector: 'dw-recursive-menu-item',
  templateUrl: './recursive-menu-item.component.html',
  styleUrls: ['./recursive-menu-item.component.css']
})
export class DwRecursiveMenuItemComponent implements AfterViewInit {
  level = 1;
  @Input() menuItem: any;
  @ViewChildren(DwSubMenuComponent) dwSubMenus: QueryList<DwSubMenuComponent>;
  @ViewChildren(DwRecursiveMenuItemComponent) subMenus: QueryList<DwRecursiveMenuItemComponent>;

  ngAfterViewInit(): void {
    if (this.subMenus.length) {
      this.subMenus
        .filter(x => x !== this)
        .forEach(menu => {
          setTimeout(_ => {
            menu.level = this.level + 1;
            menu.syncDwSubMenusLevel();
          });
        });
    }
  }

  syncDwSubMenusLevel(): void {
    if (this.dwSubMenus.length) {
      this.dwSubMenus
        .forEach(menu => {
          menu.level = this.level;
        });
    }
  }

  constructor(
    private recursiveMenuService: DwRecursiveMenuService
  ) {
  }

  // 點選Menu
  onClickItem(menuItem: IDwMenu): void {
    this.recursiveMenuService.onClickItem(menuItem);
  }
}
