import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DwMessageService, UploadFile } from 'ng-quicksilver';
import { filter } from 'rxjs/operators';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-upload
    [(dwFileList)]="fileList"
    [dwBeforeUpload]="beforeUpload">
    <button dw-button>
      <i class="anticon anticon-upload"></i><span>Select File</span>
    </button>
  </dw-upload>
  <button dw-button [dwType]="'primary'" [dwLoading]="uploading" (click)="handleUpload()" [disabled]="fileList.length == 0" style="margin-top: 16px">
    {{ uploading ? 'Uploading' : 'Start Upload' }}
  </button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  uploading = false;
  fileList: UploadFile[] = [];

  constructor(private http: HttpClient, private msg: DwMessageService) {}

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList.push(file);
    return false;
  }

  handleUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts/', formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        (event: {}) => {
          this.uploading = false;
          this.msg.success('upload successfully.');
        },
        err => {
          this.uploading = false;
          this.msg.error('upload failed.');
        }
      );
  }
}
