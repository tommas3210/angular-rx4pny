import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgQuicksilverModule } from 'ng-quicksilver';

import { DwFormInputComponent } from './input/form-input.component';
import { DwFormItemPanelComponent } from './form-item-panel';
import { DwFormTextareaComponent } from './input/form-textarea.component';
import { DwFormInputGroupComponent } from './input/form-input-group.component';
import { DwFormSelectComponent } from './select/form-select.component';
import { DwFormCascaderComponent } from './cascader/form-cascader.component';
import { DwFormDatePickerComponent } from './date-picker/form-date-picker.component';
import { DwFormRangePickerComponent } from './date-picker/form-range-picker.component';
import { DwLanguageModule } from '../language/language.module';
import { DwFormTimePickerComponent } from './time-picker/form-time-picker.component';

const DW_COMPONENTS = [
  DwFormItemPanelComponent,
  DwFormInputComponent,
  DwFormTextareaComponent,
  DwFormInputGroupComponent,
  DwFormSelectComponent,
  DwFormCascaderComponent,
  DwFormDatePickerComponent,
  DwFormRangePickerComponent,
  DwFormTimePickerComponent
];

@NgModule({
  imports: [
    CommonModule,
    NgQuicksilverModule,
    DwLanguageModule,
    FormsModule
  ],
  declarations: [
    ...DW_COMPONENTS
  ],
  exports: [
    ...DW_COMPONENTS
  ]
})
export class DwFormItemsModule { }
