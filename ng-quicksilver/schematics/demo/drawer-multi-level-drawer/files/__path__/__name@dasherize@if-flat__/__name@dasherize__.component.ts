import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwType="primary" (click)="open()">New Cookbook</button>
    <dw-drawer [dwClosable]="false" [dwOffsetX]="childrenVisible ? 180 : 0" [dwWidth]="320" [dwVisible]="visible" dwTitle="Cookbook" (dwOnClose)="close()">
      <form dw-form>
        <div dw-row>
          <div dw-col dwSpan="24">
            <dw-form-item>
              <dw-form-label>Name</dw-form-label>
              <dw-form-control>
                <input dw-input placeholder="please enter cookbook name">
              </dw-form-control>
            </dw-form-item>
          </div>
        </div>
        <div dw-row>
          <div dw-col dwSpan="24">
            <dw-form-item>
              <dw-form-label>Food</dw-form-label>
              <dw-form-control>
                <dw-tag>potato</dw-tag>
                <dw-tag>eggplant</dw-tag>
                <dw-tag (click)="openChildren()">+</dw-tag>
              </dw-form-control>
            </dw-form-item>
          </div>
        </div>
      </form>
      <div class="footer">
        <button type="button" (click)="close()" class="ant-btn" style="margin-right: 8px;"><span>Cancel</span></button>
        <button type="button" (click)="close()" class="ant-btn ant-btn-primary"><span>Submit</span></button>
      </div>
      <dw-drawer [dwClosable]="false" [dwVisible]="childrenVisible" dwTitle="Food" (dwOnClose)="closeChildren()">
        <dw-list [dwDataSource]="vegetables" [dwRenderItem]="item">
          <ng-template #item let-item>
            <dw-list-item [dwContent]="item"></dw-list-item>
          </ng-template>
        </dw-list>
      </dw-drawer>
    </dw-drawer>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .footer {
      position: absolute;
      bottom: 0px;
      width: 100%;
      border-top: 1px solid rgb(232, 232, 232);
      padding: 10px 16px;
      text-align: right;
      left: 0px;
      background: #fff;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
  visible = false;
  childrenVisible = false;

  vegetables = ['asparagus', 'bamboo', 'potato', 'carrot', 'cilantro', 'potato', 'eggplant'];

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  openChildren(): void {
    this.childrenVisible = true;
  }

  closeChildren(): void {
    this.childrenVisible = false;
  }
}
