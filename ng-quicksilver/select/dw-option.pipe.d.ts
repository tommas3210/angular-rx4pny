import { PipeTransform, QueryList } from '@angular/core';
import { DwOptionGroupComponent } from './dw-option-group.component';
import { DwOptionComponent } from './dw-option.component';
export declare type TFilterOption = (input?: string, option?: DwOptionComponent) => boolean;
export declare class DwOptionPipe implements PipeTransform {
    transform(options: DwOptionComponent[] | QueryList<DwOptionComponent>, input: string, filterOption: TFilterOption, serverSearch: boolean): DwOptionComponent[] | QueryList<DwOptionComponent>;
}
export declare class DwSubOptionPipe implements PipeTransform {
    transform(groups: DwOptionGroupComponent[] | QueryList<DwOptionGroupComponent>, input: string, filterOption: TFilterOption, serverSearch: boolean): DwOptionGroupComponent[] | QueryList<DwOptionGroupComponent>;
}
export declare function defaultFilterOption(input: string, option: DwOptionComponent): boolean;
