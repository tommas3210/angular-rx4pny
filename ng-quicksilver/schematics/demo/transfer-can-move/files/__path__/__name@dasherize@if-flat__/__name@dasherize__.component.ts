import { Component, OnInit } from '@angular/core';
import { DwMessageService, TransferCanMove, TransferItem } from 'ng-quicksilver';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-transfer
      [dwDataSource]="list"
      [dwCanMove]="canMove"
      (dwSelectChange)="select($event)"
      (dwChange)="change($event)">
    </dw-transfer>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  list = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key     : i.toString(),
        title   : `content${i + 1}`,
        disabled: i % 3 < 1
      });
    }

    [ 2, 3 ].forEach(idx => this.list[ idx ].direction = 'right');
  }

  canMove(arg: TransferCanMove): Observable<TransferItem[]> {
    if (arg.direction === 'right' && arg.list.length > 0) { arg.list.splice(0, 1); }
    // or
    // if (arg.direction === 'right' && arg.list.length > 0) delete arg.list[0];
    return of(arg.list).pipe(delay(1000));
  }

  select(ret: {}): void {
    console.log('dwSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('dwChange', ret);
  }
}
