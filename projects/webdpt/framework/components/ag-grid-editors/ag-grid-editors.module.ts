import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { DwCellButtonEditorComponent } from './cell-button-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgQuicksilverModule } from 'ng-quicksilver';
import { ButtonEditorFilterComponent } from './button-editor-filter.component';
import { DwAgGridDateInputComponent } from './ag-grid-date-input.component';
import { FloatingButtonEditorFilterComponent } from './floating-button-editor-filter.component';
import { DwAgGridDateEditorComponent } from './ag-grid-date-editor.component';
import * as moment from 'moment';
import { DwAgTextCellEditorComponent } from './ag-text-cell-editor.component';
import { DwAgTextColumnFilterComponent } from './ag-text-column-filter.component';
import { DwAgTextColumnFloatingFilterComponent } from './ag-text-column-floating-filter.component';
import { DwAgNumberCellEditorComponent } from './ag-number-cell-editor.component';
import { DwAgSelectCellEditorComponent } from './ag-select-cell-editor.component';
import { DwAgLargeTextCellEditorComponent } from './ag-large-text-cell-editor.component';
import { TranslateModule } from '@ngx-translate/core';
import { DwAgGridValidationEditorComponent } from './ag-grid-validation-editor';

const dateFilterCompare = (filterLocalDateAtMidnight, cellValue): any => {
  cellValue = moment(cellValue, 'DD/MM/YYYY').toDate();
  if (filterLocalDateAtMidnight.getFullYear() === cellValue.getFullYear() &&
    filterLocalDateAtMidnight.getDate() === cellValue.getDate() &&
    filterLocalDateAtMidnight.getMonth() === cellValue.getMonth()) {
    return 0;
  }
  if (cellValue.getTime() < filterLocalDateAtMidnight.getTime()) {
    return -1;
  }
  if (cellValue.getTime() > filterLocalDateAtMidnight.getTime()) {
    return 1;
  }
  return false;
};

export const AG_GRID_COMPONENTS = [
  DwCellButtonEditorComponent,
  ButtonEditorFilterComponent,
  DwAgGridDateInputComponent,
  FloatingButtonEditorFilterComponent,
  DwAgGridDateEditorComponent,
  DwAgTextCellEditorComponent,
  DwAgTextColumnFilterComponent,
  DwAgTextColumnFloatingFilterComponent,
  DwAgNumberCellEditorComponent,
  DwAgSelectCellEditorComponent,
  DwAgLargeTextCellEditorComponent,
  DwAgGridValidationEditorComponent
];

export const AG_GRID_FW_COMPONENTS: any =  {
  floatingCellButtonEditor: FloatingButtonEditorFilterComponent,
  buttonEditorFilter: ButtonEditorFilterComponent,
  agDateInput: DwAgGridDateInputComponent,
  dateEditor: DwAgGridDateEditorComponent,
  dateFilterComparator: dateFilterCompare,
  cellButtonEditor: DwCellButtonEditorComponent,

  // 平台將預設的editor換成ng-zorro
  agTextCellEditor: DwAgTextCellEditorComponent,
  agNumberCellEditor: DwAgNumberCellEditorComponent,
  agSelectCellEditor: DwAgSelectCellEditorComponent,
  agLargeTextCellEditor: DwAgLargeTextCellEditorComponent,
  agDateCellEditor: DwAgGridDateEditorComponent
  // agTextColumnFilter: DwAgTextColumnFilterComponent,
  // agTextColumnFloatingFilter: DwAgTextColumnFloatingFilterComponent
};

export const enum AG_GRID_FW_COMPONENT {
  CellButtonEditor = 'cellButtonEditor',
  ButtonEditorFilter = 'buttonEditorFilter',
  FloatingButtonEditor = 'floatingCellButtonEditor'
}



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgQuicksilverModule,
    TranslateModule,
    AgGridModule.withComponents([
      ...AG_GRID_COMPONENTS
    ])
  ],
  declarations: [
    ...AG_GRID_COMPONENTS
  ],
  exports: [
    AgGridModule
  ]
})
export class DwAgGridEditorsModule {
  static forAgGridComponents(): ModuleWithProviders {
    return {
      ngModule: DwAgGridEditorsModule,
      providers: [
        ...AgGridModule.withComponents([
          ...AG_GRID_COMPONENTS
        ]).providers
      ]
    };
  }
}
