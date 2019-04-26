import { DwCollapsePanelComponent } from './dw-collapse-panel.component';
export declare class DwCollapseComponent {
    private _accordion;
    private _bordered;
    private listOfPanel;
    dwAccordion: boolean;
    dwBordered: boolean;
    click(collapse: DwCollapsePanelComponent): void;
    addCollapse(collapse: DwCollapsePanelComponent): void;
    removeCollapse(collapse: DwCollapsePanelComponent): void;
}
