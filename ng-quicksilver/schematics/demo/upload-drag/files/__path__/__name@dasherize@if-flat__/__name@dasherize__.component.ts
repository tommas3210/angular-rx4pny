import { Component } from '@angular/core';
import { DwMessageService, UploadFile } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-upload
    dwType="drag"
    [dwMultiple]="true"
    [dwLimit]="2"
    dwAction="https://jsonplaceholder.typicode.com/posts/"
    (dwChange)="handleChange($event)">
    <p class="ant-upload-drag-icon">
      <i class="anticon anticon-inbox"></i>
    </p>
    <p class="ant-upload-text">Click or drag file to this area to upload</p>
    <p class="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
  </dw-upload>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
  :host ::ng-deep dw-upload { display: block; }
  :host ::ng-deep .ant-upload.ant-upload-drag { height: 180px; }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  constructor(private msg: DwMessageService) {}
  // tslint:disable-next-line:typedef
  handleChange({ file, fileList }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }
}
