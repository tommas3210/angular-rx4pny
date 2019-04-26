import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
  <form dw-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
    <dw-form-item>
      <dw-form-label [dwSm]="6" dwFor="mention">Top coders</dw-form-label>
      <dw-form-control [dwSm]="16">
        <dw-mention
          #mentions
          [dwSuggestions]="suggestions">
          <input
            id="mention"
            placeholder="input here"
            formControlName="mention"
            dwMentionTrigger
            dw-input>
        </dw-mention>
        <dw-form-explain *ngIf="validateForm.get('mention').dirty && validateForm.get('mention').errors">
          More than one must be selected!
        </dw-form-explain>
      </dw-form-control>
    </dw-form-item>
    <dw-form-item dw-row style="margin-bottom:8px;">
      <dw-form-control [dwSpan]="14" [dwOffset]="6">
        <button type="button" dw-button dwType="primary" (click)="submitForm()">Submit</button>
        &nbsp;&nbsp;&nbsp;
        <button type="button" dw-button (click)="resetForm()">Reset</button>
      </dw-form-control>
    </dw-form-item>
  </form>
`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {

  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
  validateForm: FormGroup;
  @ViewChild('mentions') mentionChild;

  get mention(): AbstractControl { return  this.validateForm.get('mention'); }

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      mention: [ '@afc163 ', [ Validators.required, this.mentionValidator ] ]
    });
  }

  mentionValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (this.mentionChild.getMentions().length < 2) {
      return { confirm: true, error: true };
    }
  };

  submitForm(): void {
    this.mention.markAsDirty();
    if (this.mention.valid) {
      console.log('Submit!!!', this.mention.value);
      console.log(this.mentionChild.getMentions());
    } else {
      console.log('Errors in form!!!');
    }
  }

  resetForm(): void {
    this.validateForm.reset({
      mention: '@afc163 '
    });
  }

}
