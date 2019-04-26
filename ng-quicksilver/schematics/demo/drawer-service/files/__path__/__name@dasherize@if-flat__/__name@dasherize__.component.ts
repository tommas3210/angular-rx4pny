/* entryComponents: DwDrawerCustomComponent */

import { Component, Input, ViewChild } from '@angular/core';
import { DwDrawerRef, DwDrawerService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <ng-template #drawerTemplate let-data let-drawerRef="drawerRef">
      value: {{data?.value}}
      <br>
      <button dw-button dwType="primary" (click)="drawerRef.close()">close</button>
    </ng-template>
    <div dw-form>
      <dw-form-item>
        <input dw-input [(ngModel)]="value">
      </dw-form-item>
    </div>
    <button dw-button dwType="primary" (click)="openTemplate()">Use Template</button>&nbsp;
    <button dw-button dwType="primary" (click)="openComponent()">Use Component</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component {

  @ViewChild('drawerTemplate') drawerTemplate;
  value = 'ng';

  constructor(
    private drawerService: DwDrawerService
  ) {

  }

  openTemplate(): void {
    const drawerRef = this.drawerService.create({
      dwTitle: 'Template',
      dwContent: this.drawerTemplate,
      dwContentParams: {
        value: this.value
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Template) open');
    });

    drawerRef.afterClose.subscribe(() => {
      console.log('Drawer(Template) close');
    });
  }

  openComponent(): void {
    const drawerRef = this.drawerService.create<DwDrawerCustomComponent, { value: string }, string>({
      dwTitle: 'Component',
      dwContent: DwDrawerCustomComponent,
      dwContentParams: {
        value: this.value
      }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (typeof data === 'string') {
        this.value = data;
      }
    });
  }

}

@Component({
  selector: 'dw-drawer-custom-component',
  template: `
    <div>
      <input dw-input [(ngModel)]="value">
      <dw-divider></dw-divider>
      <button dwType="primary" (click)="close()" dw-button>Confirm</button>
    </div>
  `
})
export class DwDrawerCustomComponent {

  @Input() value = '';

  constructor(
    private drawerRef: DwDrawerRef<string>
  ) {
  }

  close(): void {
    this.drawerRef.close(this.value);
  }
}
