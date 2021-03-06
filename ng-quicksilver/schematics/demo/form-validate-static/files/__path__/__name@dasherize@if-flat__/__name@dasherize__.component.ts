import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <form dw-form>
      <dw-form-item>
        <dw-form-label [dwSpan]="5">Fail</dw-form-label>
        <dw-form-control dwValidateStatus="error" [dwSpan]="12">
          <input dw-input [ngModel]="'unavailable choice'" name="errorValid">
          <dw-form-explain>Should be combination of numbers & alphabets</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="5">Warning</dw-form-label>
        <dw-form-control dwValidateStatus="warning" [dwSpan]="12">
          <input dw-input [ngModel]="'Warning'" name="warningValid">
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="5">Validating</dw-form-label>
        <dw-form-control [dwSpan]="12" dwValidateStatus="validating" dwHasFeedback>
          <input dw-input [ngModel]="'The content is being validating'" name="validating">
          <dw-form-explain>I'm the content is being validating</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="5">Success</dw-form-label>
        <dw-form-control [dwSpan]="12" dwValidateStatus="success" dwHasFeedback>
          <input dw-input [ngModel]="'The content'" name="successValid">
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="5">Warning</dw-form-label>
        <dw-form-control [dwSpan]="12" dwValidateStatus="warning" dwHasFeedback>
          <input dw-input [ngModel]="'Warning'" name="warningHighValid">
          <dw-form-explain>Should be combination of numbers & alphabets</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="5">Fail</dw-form-label>
        <dw-form-control [dwSpan]="12" dwValidateStatus="error" dwHasFeedback>
          <input dw-input [ngModel]="'unavailable choice'" name="invalidValid">
          <dw-form-explain>Should be combination of numbers & alphabets</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="5">Success</dw-form-label>
        <dw-form-control [dwSpan]="12" dwValidateStatus="success" dwHasFeedback>
          <dw-date-picker name="date-picker-success" style="width: 100%"></dw-date-picker>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="5">Warning</dw-form-label>
        <dw-form-control [dwSpan]="12" dwValidateStatus="warning" dwHasFeedback>
          <dw-time-picker name="time-picker-warning" style="width: 100%"></dw-time-picker>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="5">Error</dw-form-label>
        <dw-form-control [dwSpan]="12" dwValidateStatus="error" dwHasFeedback>
          <dw-select name="select-error" [ngModel]="'Option 1'">
            <dw-option dwValue="Option 1" dwLabel="Option 1"></dw-option>
            <dw-option dwValue="Option 2" dwLabel="Option 2"></dw-option>
          </dw-select>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="5">Validating</dw-form-label>
        <dw-form-control [dwSpan]="12" dwValidateStatus="validating" dwHasFeedback>
          <dw-select name="select-validate" [ngModel]="'Option 2'">
            <dw-option dwValue="Option 1" dwLabel="Option 1"></dw-option>
            <dw-option dwValue="Option 2" dwLabel="Option 2"></dw-option>
          </dw-select>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="5">Success</dw-form-label>
        <dw-form-control [dwSpan]="12" dwValidateStatus="success" dwHasFeedback>
          <dw-input-number name="inputnumber-success" style="width:100%"></dw-input-number>
        </dw-form-control>
      </dw-form-item>
    </form>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      [dw-form] {
        max-width: 600px;
      }
      dw-date-picker ::ng-deep .ant-calendar-picker{
        width: 100%;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
