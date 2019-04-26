import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwType="primary" (click)="open()">Create</button>
    <dw-drawer [dwBodyStyle]="{ height: 'calc(100% - 55px)', overflow: 'auto', 'padding-bottom':'53px' }"[dwMaskClosable]="false" [dwWidth]="720" [dwVisible]="visible" dwTitle="Create" (dwOnClose)="close()">
      <form dw-form>
        <div dw-row dwGutter="8">
          <div dw-col dwSpan="12">
            <dw-form-item>
              <dw-form-label>Name</dw-form-label>
              <dw-form-control>
                <input dw-input placeholder="please enter user name">
              </dw-form-control>
            </dw-form-item>
          </div>
          <div dw-col dwSpan="12">
            <dw-form-item>
              <dw-form-label>Url</dw-form-label>
              <dw-form-control>
                <dw-input-group dwAddOnBefore="http://" dwAddOnAfter=".com">
                  <input type="text" dw-input placeholder="please enter url">
                </dw-input-group>
              </dw-form-control>
            </dw-form-item>
          </div>
        </div>
        <div dw-row dwGutter="8">
          <div dw-col dwSpan="12">
            <dw-form-item>
              <dw-form-label>Owner</dw-form-label>
              <dw-form-control>
                <dw-select dwPlaceHolder="Please select an owner"></dw-select>
              </dw-form-control>
            </dw-form-item>
          </div>
          <div dw-col dwSpan="12">
            <dw-form-item>
              <dw-form-label>Type</dw-form-label>
              <dw-form-control>
                <dw-select dwPlaceHolder="Please choose the type"></dw-select>
              </dw-form-control>
            </dw-form-item>
          </div>
        </div>
        <div dw-row dwGutter="8">
          <div dw-col dwSpan="12">
            <dw-form-item>
              <dw-form-label>Approver</dw-form-label>
              <dw-form-control>
                <dw-select dwPlaceHolder="Please choose the approver"></dw-select>
              </dw-form-control>
            </dw-form-item>
          </div>
          <div dw-col dwSpan="12">
            <dw-form-item>
              <dw-form-label>DateTime</dw-form-label>
              <dw-form-control>
                <dw-range-picker></dw-range-picker>
              </dw-form-control>
            </dw-form-item>
          </div>
        </div>
        <div dw-row dwGutter="8">
          <div dw-col dwSpan="24">
            <dw-form-item>
              <dw-form-label>Description</dw-form-label>
              <dw-form-control>
                <textarea dw-input placeholder="please enter url description" [dwAutosize]="{ minRows: 4, maxRows: 4 }"></textarea>
              </dw-form-control>
            </dw-form-item>
          </div>
        </div>
      </form>
      <div class="footer">
        <button type="button" (click)="close()" class="ant-btn" style="margin-right: 8px;"><span>Cancel</span></button>
        <button type="button" (click)="close()" class="ant-btn ant-btn-primary"><span>Submit</span></button>
      </div>
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

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
