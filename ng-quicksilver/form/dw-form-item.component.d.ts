import { DwRowComponent } from '../grid/dw-row.component';
/** should add dw-row directive to host, track https://github.com/angular/angular/issues/8785 **/
export declare class DwFormItemComponent extends DwRowComponent {
    private _flex;
    withHelp: number;
    dwFlex: boolean;
    enableHelp(): void;
    disableHelp(): void;
}
