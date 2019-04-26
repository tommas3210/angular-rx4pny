import { Component } from '@angular/core';
import { DwMessageService, UploadFile } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <div class="clearfix">
    <dw-upload
      dwAction="https://jsonplaceholder.typicode.com/posts/"
      dwListType="picture-card"
      [(dwFileList)]="fileList"
      [dwShowButton]="fileList.length < 3"
      [dwPreview]="handlePreview">
        <i class="anticon anticon-plus"></i>
        <div class="ant-upload-text">Upload</div>
    </dw-upload>
    <dw-modal [dwVisible]="previewVisible" [dwContent]="modalContent" [dwFooter]="null" (dwOnCancel)="previewVisible=false">
      <ng-template #modalContent>
        <img [src]="previewImage" [ngStyle]="{ 'width': '100%' }" />
      </ng-template>
    </dw-modal>
  </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
  :host ::ng-deep i {
    font-size: 32px;
    color: #999;
  }
  :host ::ng-deep .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  previewImage = '';
  previewVisible = false;

  constructor(private msg: DwMessageService) {}

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }
}
