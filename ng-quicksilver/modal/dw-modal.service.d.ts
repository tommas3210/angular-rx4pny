import { Overlay } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { LoggerService } from '../core/util/logger/logger.service';
import { DwModalControlService } from './dw-modal-control.service';
import { DwModalRef } from './dw-modal-ref.class';
import { DwModalComponent } from './dw-modal.component';
import { ConfirmType, ModalOptionsForService } from './dw-modal.type';
export declare class ModalBuilderForService {
    private overlay;
    private modalRef;
    private overlayRef;
    constructor(overlay: Overlay, options?: ModalOptionsForService);
    getInstance(): DwModalComponent;
    destroyModal(): void;
    private changeProps;
    private createModal;
}
export declare class DwModalService {
    private overlay;
    private logger;
    private modalControl;
    readonly openModals: DwModalRef[];
    readonly afterAllClose: Observable<void>;
    constructor(overlay: Overlay, logger: LoggerService, modalControl: DwModalControlService);
    closeAll(): void;
    create<T>(options?: ModalOptionsForService<T>): DwModalRef<T>;
    confirm<T>(options?: ModalOptionsForService<T>, confirmType?: ConfirmType): DwModalRef<T>;
    info<T>(options?: ModalOptionsForService<T>): DwModalRef<T>;
    success<T>(options?: ModalOptionsForService<T>): DwModalRef<T>;
    error<T>(options?: ModalOptionsForService<T>): DwModalRef<T>;
    warning<T>(options?: ModalOptionsForService<T>): DwModalRef<T>;
    private simpleConfirm;
}
