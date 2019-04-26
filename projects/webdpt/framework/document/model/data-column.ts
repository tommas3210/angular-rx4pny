import { FormGroup, AbstractControl, FormControl} from '@angular/forms';
import { DwDataTable } from './data-table';
import { DatePipe } from '@angular/common';

export class DwDataColumn extends FormControl {

  public updateValue(value: any): void {
    this.markAsDirty();
    this.setValue(value);
  }

}
