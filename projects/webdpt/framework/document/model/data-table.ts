import { FormArray, AbstractControl, ValidatorFn, AsyncValidatorFn, FormBuilder } from '@angular/forms';
import { DwDataRow, DELETE } from './data-row';


export class DwDataTable extends FormArray {
  constructor(datasource: {[key: string]: any}[]) {
    // const controls: AbstractControl[] = DwDataTable.parseToControl(datasource);
    const controls: AbstractControl[] = [];
    for (const row of datasource) {
      controls.push(new DwDataRow(row));
    }
    super(controls);
  }

  get rows(): DwDataRow[] {
    return (this.controls as DwDataRow[]);
  }

  get activeRows(): DwDataRow[] {
    return (this.controls as DwDataRow[]).filter(row => row.$state !== DELETE);
  }

  insertRow (index: number, data: {[key: string]: any} | DwDataRow): void {
    const control: DwDataRow = (data instanceof DwDataRow) ? data : new DwDataRow(data);
    control.markAsCreate();
    this.insert(index, control);
  }

  pushRow(data: {[key: string]: any} | DwDataRow): void {
    const control: DwDataRow = (data instanceof DwDataRow) ? data : new DwDataRow(data);
    control.markAsCreate();
    this.push(control);
  }

  updateRow (index: number, data: {[key: string]: any} | DwDataRow): void {
    if (this.rows[index]) {
      if (data instanceof DwDataRow) {
        this.rows[index] = data;
      } else {
        this.rows[index].setValue(data);
      }
      this.rows[index].markAsUpdate();
    } else {
      throw new Error(`Must supply a value for form control at index: ${index}.`);
    }

  }

  batchColumnsValidator (validators: {[key: string]: ValidatorFn | ValidatorFn[]}): void {
    this.rows.forEach(row => {
      row.batchColumnsValidator(validators);
    });
  }

  deleteRow (index: number): void {
    if (this.controls[index]) {
      (this.controls[index] as DwDataRow).markAsDelete();
    }
  }
}
