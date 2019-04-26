import { RendererFactory2 } from '@angular/core';
import { DwMeasureScrollbarService } from '../../services/dw-measure-scrollbar.service';
import { DwBlockScrollStrategy } from './dw-block-scroll-strategy';
export declare class DwScrollStrategyOptions {
    private dwMeasureScrollbarService;
    private document;
    private renderer;
    constructor(rendererFactory: RendererFactory2, dwMeasureScrollbarService: DwMeasureScrollbarService, document: any);
    block: () => DwBlockScrollStrategy;
}
