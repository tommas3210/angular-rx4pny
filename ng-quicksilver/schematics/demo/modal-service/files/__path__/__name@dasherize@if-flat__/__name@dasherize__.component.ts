/* entryComponents: DwModalCustomComponent */

import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { DwModalRef, DwModalService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwType="primary" (click)="createModal()">
      <span>String</span>
    </button>

    <button dw-button dwType="primary" (click)="createTplModal(tplTitle, tplContent, tplFooter)">
      <span>Template</span>
    </button>
    <ng-template #tplTitle>
      <span>Title Template</span>
    </ng-template>
    <ng-template #tplContent>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </ng-template>
    <ng-template #tplFooter>
      <button dw-button dwType="primary" (click)="destroyTplModal()" [dwLoading]="tplModalButtonLoading">Close after submit</button>
    </ng-template>

    <br /><br />

    <button dw-button dwType="primary" (click)="createComponentModal()">
      <span>Use Component</span>
    </button>

    <button dw-button dwType="primary" (click)="createCustomButtonModal()">Custom Button</button>

    <br /><br />

    <button dw-button dwType="primary" (click)="openAndCloseAll()">Open more modals then close all after 2s</button>
    <dw-modal [(dwVisible)]="htmlModalVisible" dwMask="false" dwZIndex="1001" dwTitle="Non-service html modal">This is a non-service html modal</dw-modal>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`button {
      margin-right: 8px;
    }`]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  tplModal: DwModalRef;
  tplModalButtonLoading = false;
  htmlModalVisible = false;

  constructor(private modalService: DwModalService) { }

  createModal(): void {
    this.modalService.create({
      dwTitle: 'Modal Title',
      dwContent: 'string, will close after 1 sec',
      dwClosable: false,
      dwOnOk: () => new Promise((resolve) => window.setTimeout(resolve, 1000))
    });
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      dwTitle: tplTitle,
      dwContent: tplContent,
      dwFooter: tplFooter,
      dwMaskClosable: false,
      dwClosable: false,
      dwOnOk: () => console.log('Click ok')
    });
  }

  destroyTplModal(): void {
    this.tplModalButtonLoading = true;
    window.setTimeout(() => {
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    }, 1000);
  }

  createComponentModal(): void {
    const modal = this.modalService.create({
      dwTitle: 'Modal Title',
      dwContent: DwModalCustomComponent,
      dwComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      dwFooter: [{
        label: 'change component tilte from outside',
        onClick: (componentInstance) => {
          componentInstance.title = 'title in inner component is changed';
        }
      }]
    });

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    // Return a result when closed
    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    window.setTimeout(() => {
      const instance = modal.getContentComponent();
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }

  createCustomButtonModal(): void {
    const modal = this.modalService.create({
      dwTitle: 'custom button demo',
      dwContent: 'pass array of button config to dwFooter to create multiple buttons',
      dwFooter: [
        {
          label: 'Close',
          shape: 'default',
          onClick: () => modal.destroy()
        },
        {
          label: 'Confirm',
          type: 'primary',
          onClick: () => this.modalService.confirm({ dwTitle: 'Confirm Modal Title', dwContent: 'Confirm Modal Content' })
        },
        {
          label: 'Change Button Status',
          type: 'danger',
          loading: false,
          onClick(): void {
            this.loading = true;
            window.setTimeout(() => this.loading = false, 1000);
            window.setTimeout(() => {
              this.loading = false;
              this.disabled = true;
              this.label = 'can not be clicked！';
            }, 2000);
          }
        },
        {
          label: 'async load',
          type: 'dashed',
          onClick: () => new Promise(resolve => window.setTimeout(resolve, 2000))
        }
      ]
    });
  }

  openAndCloseAll(): void {
    let pos = 0;

    [ 'create', 'info', 'success', 'error' ].forEach((method) => this.modalService[method]({
      dwMask: false,
      dwTitle: `Test ${method} title`,
      dwContent: `Test content: <b>${method}</b>`,
      dwStyle: { position: 'absolute', top: `${pos * 70}px`, left: `${(pos++) * 300}px` }
    }));

    this.htmlModalVisible = true;

    this.modalService.afterAllClose.subscribe(() => console.log('afterAllClose emitted!'));

    window.setTimeout(() => this.modalService.closeAll(), 2000);
  }
}

@Component({
  selector: 'dw-modal-custom-component',
  template: `
    <div>
      <h2>{{ title }}</h2>
      <h4>{{ subtitle }}</h4>
      <p>
        <span>Get Modal instance in component</span>
        <button dw-button [dwType]="'primary'" (click)="destroyModal()">destroy modal in the component</button>
      </p>
    </div>
  `
})
export class DwModalCustomComponent {
  @Input() title: string;
  @Input() subtitle: string;

  constructor(private modal: DwModalRef) { }

  destroyModal(): void {
    this.modal.destroy({ data: 'this the result data' });
  }
}
