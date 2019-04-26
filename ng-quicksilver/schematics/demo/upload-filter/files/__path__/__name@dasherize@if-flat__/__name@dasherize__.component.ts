import { Component } from '@angular/core';
import { UploadFile } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-upload
    dwAction="https://jsonplaceholder.typicode.com/posts/"
    [dwFileList]="fileList"
    dwMultiple
    [dwLimit]="2"
    (dwChange)="handleChange($event)">
    <button dw-button>
      <i class="anticon anticon-upload"></i><span>Upload</span>
    </button>
  </dw-upload>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png'
    }
  ];

  // tslint:disable-next-line:no-any
  handleChange(info: any): void {
    const fileList = info.fileList;
    // 2. read from response and show file link
    if (info.file.response) {
      info.file.url = info.file.response.url;
    }
    // 3. filter successfully uploaded files according to response from server
    this.fileList = fileList.filter(item => {
      if (item.response) {
        return item.response.status === 'success';
      }
      return true;
    });
  }
}
