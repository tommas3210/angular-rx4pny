import { Component, ViewEncapsulation } from '@angular/core';
import {
  CascaderBaseComponent, CascaderDocComponent,
  CascaderLoadingComponent,
  DatePickerBaseComponent,
  DatePickerDisabledComponent, DatePickerDocComponent,
  DatePickerFooterComponent,
  DatePickerOpenComponent,
  FormItemsCommonDocComponent,
  InputBaseComponent,
  InputDocumentComponent,
  InputFormComponent,
  InputGroupBaseComponent, InputGroupDocComponent,
  InputSizeComponent,
  RangePickerBaseComponent, RangePickerDocComponent,
  RangePickerRangeComponent,
  SelectBaseComponent, SelectDocComponent,
  SelectSearchComponent,
  SelectTagsComponent,
  TextareaAutosizeComponentComponent,
  TextareaBaseComponent, TextareaDocComponent,
  TimePickerDocComponent,
  TimePickerBaseComponent,
  TimePickerFormComponent,
  TimePickerDisabledComponent,
  TimePickerDisabledTimeComponent
} from './components';

import * as inputBase from '!raw-loader!./components/input/input-base.component.ts';
import * as inputForm from '!raw-loader!./components/input/input-form.component.ts';
import * as inputSize from '!raw-loader!./components/input/input-size.component.ts';
import * as textareaBase from '!raw-loader!./components/textarea/textarea-base.component.ts';
import * as textareaAutosize from '!raw-loader!./components/textarea/textarea-autosize.component.ts';
import * as inputGroupBase from '!raw-loader!./components/input-group/input-group-base.component.ts';
import * as selectBase from '!raw-loader!./components/select/select-base.component.ts';
import * as selectSearch from '!raw-loader!./components/select/select-search.component.ts';
import * as selectTags from '!raw-loader!./components/select/select-tags.component.ts';
import * as datePickerBase from '!raw-loader!./components/date-picker/date-picker-base.component.ts';
import * as datePickerDisabled from '!raw-loader!./components/date-picker/date-picker-disabled.component.ts';
import * as datePickerOpen from '!raw-loader!./components/date-picker/date-picker-open.component.ts';
import * as datePickerFooter from '!raw-loader!./components/date-picker/date-picker-footer.component.ts';
import * as rangePickerBase from '!raw-loader!./components/range-picker/range-picker-base.component.ts';
import * as rangePickerRange from '!raw-loader!./components/range-picker/range-picker-range.component.ts';
import * as cascaderBase from '!raw-loader!./components/cascader/cascader-base.component.ts';
import * as cascaderLoading from '!raw-loader!./components/cascader/cascader-loading.component.ts';
import * as timePickerBase from '!raw-loader!./components/time-picker/time-picker-base.component';
import * as timePickerForm from '!raw-loader!./components/time-picker/time-picker-form.component';
import * as timePickerDisabled from '!raw-loader!./components/time-picker/time-picker-disabled.component';
import * as timePickerDisabledTime from '!raw-loader!./components/time-picker/time-picker-disabled-time.component';

@Component({
  selector: 'dw-form-items',
  templateUrl: './demo-form-items.component.html',
  styles: [
      `
      dw-form-items .ant-layout-header {
        background: #fff;
      }

      dw-form-items .ant-layout-sider {
        background: #fff;
      }

      dw-form-items tr.ant-table-row td:first-child {
        word-break: normal;
      }

      dw-form-items .ant-layout-sider{
        position: relative;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class DemoFormItemsComponent {

  constructor() {}

  demoComponents = [
    {
      selector: 'dw-form-input',
      title: 'Input 輸入框',
      doc: InputDocumentComponent,
      examples: [
        {
          title: '基本使用',
          type: InputBaseComponent,
          id: 'input-base',
          code: inputBase
        },
        {
          title: 'Form表單',
          type: InputFormComponent,
          id: 'input-form',
          code: inputForm
        },
        {
          title: '三種尺寸',
          type: InputSizeComponent,
          id: 'input-size',
          code: inputSize
        }
      ]
    },
    {
      selector: 'dw-form-textarea',
      title: 'Textarea 本文域',
      doc: TextareaDocComponent,
      examples: [
        {
          title: '基本使用',
          type: TextareaBaseComponent,
          id: 'textarea-base',
          code: textareaBase
        },
        {
          title: '自定義尺寸',
          type: TextareaAutosizeComponentComponent,
          id: 'textarea-autosize',
          code: textareaAutosize
        }
      ]
    },
    {
      selector: 'dw-form-input-group',
      title: 'Input Group 輸入框組合',
      doc: InputGroupDocComponent,
      examples: [
        {
          title: '前/后置标签',
          type: InputGroupBaseComponent,
          id: 'input-group-base',
          code: inputGroupBase
        }
      ]
    },
    {
      selector: 'dw-form-select',
      title: 'Select 選擇器',
      doc: SelectDocComponent,
      examples: [
        {
          title: '基本使用',
          type: SelectBaseComponent,
          id: 'select-base',
          code: selectBase
        },
        {
          title: '搜尋框',
          type: SelectSearchComponent,
          id: 'select-search',
          code: selectSearch
        },
        {
          title: '多選標籤',
          type: SelectTagsComponent,
          id: 'select-tags',
          code: selectTags
        }
      ]
    },
    {
      selector: 'dw-date-picker',
      title: 'DatePicker 日期選擇框',
      doc: DatePickerDocComponent,
      examples: [
        {
          title: '基本使用',
          type: DatePickerBaseComponent,
          id: 'date-picker-base',
          code: datePickerBase
        },
        {
          title: '禁用',
          type: DatePickerDisabledComponent,
          id: 'date-picker-disabled',
          code: datePickerDisabled
        },
        {
          title: '開閉日曆',
          type: DatePickerOpenComponent,
          id: 'date-picker-open',
          code: datePickerOpen
        },
        {
          title: '頁腳',
          type: DatePickerFooterComponent,
          id: 'date-picker-footer',
          code: datePickerFooter
        }
      ]
    },
    {
      selector: 'dw-form-range-picker',
      title: 'RangePicker 日期範圍選擇框',
      doc: RangePickerDocComponent,
      examples: [
        {
          title: '基本使用',
          type: RangePickerBaseComponent,
          id: 'range-picker-base',
          code: rangePickerBase
        },
        {
          title: '自定義日期範圍',
          type: RangePickerRangeComponent,
          id: 'range-picker-range',
          code: rangePickerRange
        }
      ]
    },
    {
      selector: 'dw-time-picker',
      title: 'TimePicker 時間選擇框',
      doc: TimePickerDocComponent,
      examples: [
        {
          title: '基本使用',
          type: TimePickerBaseComponent,
          id: 'time-picker-base',
          code: timePickerBase
        },
        {
          title: 'Form表單',
          type: TimePickerFormComponent,
          id: 'time-picker-form',
          code: timePickerForm
        },
        {
          title: '禁用',
          type: TimePickerDisabledComponent,
          id: 'time-picker-disabled',
          code: timePickerDisabled
        },
        {
          title: '禁用時間',
          type: TimePickerDisabledTimeComponent,
          id: 'time-picker-disabled-time',
          code: timePickerDisabledTime
        }
      ]
    },
    {
      selector: 'dw-form-cascader',
      title: 'Cascader 聯級選擇框',
      doc: CascaderDocComponent,
      examples: [
        {
          title: '基本使用',
          type: CascaderBaseComponent,
          id: 'cascader-base',
          code: cascaderBase
        },
        {
          title: '動態加載',
          type: CascaderLoadingComponent,
          id: 'cascader-loading',
          code: cascaderLoading
        }
      ]
    },
    {
      selector: 'dw-form-items-common-doc',
      title: '共用屬性',
      doc: FormItemsCommonDocComponent
    }
  ];
}
