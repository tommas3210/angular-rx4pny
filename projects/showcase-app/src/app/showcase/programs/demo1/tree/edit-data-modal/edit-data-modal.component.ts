import { DwModalRef } from 'ng-quicksilver';
import { Component, Input, OnInit } from '@angular/core';
import { DataModel, OriginDataModel } from '../model/model';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dw-showcase-edit-data-modal',
  templateUrl: './edit-data-modal.component.html',
  styleUrls: ['./edit-data-modal.component.css']
})
export class ShowcaseEditShowcaseDataModalComponent implements OnInit {
  validateForm: FormGroup;
  _item: DataModel;
  statusEnum: any[] = [
    { value: true, label: '運行中' },
    { value: false, label: '關閉' }
  ];
  @Input()
  set item(value: DataModel) {
    console.log(value);
    this._item = value;
  }
  submitForm = ($event, value): void => {
    console.log(this.validateForm);
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
      }
    }
    console.log(value);
    // this.subject.next(value);
    this.subject.triggerOk();
    // this.subject.destroy('onOk');
  }

  handleCancel(e: any): void {
    this.subject.triggerCancel();
    // this.subject.destroy('onCancel');
  }
  constructor(private subject: DwModalRef, private fb: FormBuilder) {
    // this.subject.on('onDestory', () => {
    //   console.log('destroy');
    // });
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      key: [this._item.key],
      parent: [this._item.parent],
      name: [this._item.name, [Validators.required]],
      address: [this._item.address],
      amount: [this._item.amount, [Validators.required]],
      status: [this._item.status, [Validators.required]],
      update: moment().format('YYYY/MM/DD hh:mm:ss')
    });
  }
  getFormControl(name: string): any {
    return this.validateForm.controls[name];
  }
}
