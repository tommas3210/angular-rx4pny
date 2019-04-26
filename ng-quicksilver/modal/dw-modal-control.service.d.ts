import { Subject } from 'rxjs';
import { DwModalRef } from './dw-modal-ref.class';
export declare class DwModalControlService {
    private parentService;
    readonly afterAllClose: Subject<void>;
    readonly openModals: DwModalRef[];
    private rootOpenModals;
    private rootAfterAllClose;
    private rootRegisteredMetaMap;
    private readonly registeredMetaMap;
    constructor(parentService: DwModalControlService);
    registerModal(modalRef: DwModalRef): void;
    deregisterModal(modalRef: DwModalRef): void;
    hasRegistered(modalRef: DwModalRef): boolean;
    closeAll(): void;
    private removeOpenModal;
}
