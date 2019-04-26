import { Component } from '@angular/core';
import { DwMessageService, UploadFile } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <div class="clearfix">
    <dw-upload
      dwAction="https://jsonplaceholder.typicode.com/posts/"
      dwListType="picture"
      [(dwFileList)]="fileList1">
      <button dw-button>
        <i class="anticon anticon-upload"></i><span>Upload</span>
      </button>
    </dw-upload>
  </div>
    <br><br>
  <div class="clearfix">
    <dw-upload class="upload-list-inline"
      dwAction="https://jsonplaceholder.typicode.com/posts/"
      dwListType="picture"
      [(dwFileList)]="fileList2">
      <button dw-button>
        <span><i class="anticon anticon-upload"></i> Upload</span>
      </button>
    </dw-upload>
  </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
  :host ::ng-deep .upload-list-inline .ant-upload-list-item {
    float: left;
    width: 200px;
    margin-right: 8px;
  }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  defaultFileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: -2,
      name: 'yyy.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];

  fileList1 = [...this.defaultFileList];
  fileList2 = [...this.defaultFileList];

  constructor(private msg: DwMessageService) {}
}
