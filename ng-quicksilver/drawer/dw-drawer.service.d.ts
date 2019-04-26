import { Overlay } from '@angular/cdk/overlay';
import { DwDrawerOptions } from './dw-drawer-options';
import { DwDrawerRef } from './dw-drawer-ref';
export declare class DrawerBuilderForService<R> {
    private overlay;
    private options;
    private drawerRef;
    private overlayRef;
    private unsubscribe$;
    constructor(overlay: Overlay, options: DwDrawerOptions);
    getInstance(): DwDrawerRef<R>;
    createDrawer(): void;
    updateOptions(options: DwDrawerOptions): void;
}
export declare class DwDrawerService {
    private overlay;
    constructor(overlay: Overlay);
    create<T = any, D = any, R = any>(options: DwDrawerOptions<T, D>): DwDrawerRef<R>;
}
