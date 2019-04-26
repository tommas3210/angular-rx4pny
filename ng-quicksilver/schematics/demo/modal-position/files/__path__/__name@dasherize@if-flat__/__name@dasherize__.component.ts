import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwType="primary" (click)="showModalTop()">Display a modal dialog at 20px to Top</button>
    <dw-modal [dwStyle]="{ top: '20px' }" [(dwVisible)]="isVisibleTop" dwTitle="20px to Top" (dwOnCancel)="handleCancelTop()" (dwOnOk)="handleOkTop()">
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </dw-modal>

    <br/><br/>

    <button dw-button dwType="primary" (click)="showModalMiddle()">Vertically centered modal dialog</button>
    <dw-modal dwWrapClassName="vertical-center-modal" [(dwVisible)]="isVisibleMiddle" dwTitle="Vertically centered modal dialog" (dwOnCancel)="handleCancelMiddle()" (dwOnOk)="handleOkMiddle()">
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </dw-modal>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    ::ng-deep .vertical-center-modal {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ::ng-deep .vertical-center-modal .ant-modal {
      top: 0;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  isVisibleTop = false;
  isVisibleMiddle = false;

  showModalTop(): void {
    this.isVisibleTop = true;
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkTop(): void {
    console.log('点击了确定');
    this.isVisibleTop = false;
  }

  handleCancelTop(): void {
    this.isVisibleTop = false;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
