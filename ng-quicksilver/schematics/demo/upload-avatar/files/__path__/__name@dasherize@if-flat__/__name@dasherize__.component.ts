import { Component } from '@angular/core';
import { DwMessageService, UploadFile } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-upload class="avatar-uploader"
    dwAction="https://jsonplaceholder.typicode.com/posts/"
    dwName="avatar"
    dwListType="picture-card"
    [dwShowUploadList]="false"
    [dwBeforeUpload]="beforeUpload"
    (dwChange)="handleChange($event)">
    <ng-container *ngIf="!avatarUrl">
      <i class="anticon anticon-plus"></i>
      <div class="ant-upload-text">Upload</div>
    </ng-container>
    <img *ngIf="avatarUrl" [src]="avatarUrl" class="avatar">
  </dw-upload>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    :host ::ng-deep .avatar-uploader > .ant-upload {
      width: 128px;
      height: 128px;
    }
    :host ::ng-deep .ant-upload-select-picture-card i {
      font-size: 32px;
      color: #999;
    }
    :host ::ng-deep .ant-upload-select-picture-card .ant-upload-text {
      margin-top: 8px;
      color: #666;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  loading = false;
  avatarUrl: string;

  constructor(private msg: DwMessageService) {}

  beforeUpload = (file: File) => {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      this.msg.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.msg.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

  private getBase64(img: File, callback: (img: {}) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    if (info.file.status === 'uploading') {
      this.loading = true;
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, (img: string) => {
        this.loading = false;
        this.avatarUrl = img;
      });
    }
  }
}
