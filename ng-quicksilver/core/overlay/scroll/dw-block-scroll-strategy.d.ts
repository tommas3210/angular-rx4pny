import { ScrollStrategy } from '@angular/cdk/overlay';
import { Renderer2 } from '@angular/core';
import { DwMeasureScrollbarService } from '../../services/dw-measure-scrollbar.service';
export declare class DwBlockScrollStrategy implements ScrollStrategy {
    private document;
    private renderer;
    private dwMeasureScrollbarService;
    constructor(document: Document, renderer: Renderer2, dwMeasureScrollbarService: DwMeasureScrollbarService);
    attach(): void;
    enable(): void;
    disable(): void;
}
