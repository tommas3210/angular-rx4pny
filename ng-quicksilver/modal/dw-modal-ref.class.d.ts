import { Observable } from 'rxjs';
import { DwModalComponent } from './dw-modal.component';
/**
 * API class that public to users to handle the modal instance.
 * DwModalRef is aim to avoid accessing to the modal instance directly by users.
 */
export declare abstract class DwModalRef<T = any, R = any> {
    abstract afterOpen: Observable<void>;
    abstract afterClose: Observable<R>;
    abstract open(): void;
    abstract close(result?: R): void;
    abstract destroy(result?: R): void;
    /**
     * Trigger the dwOnOk/dwOnCancel by manual
     */
    abstract triggerOk(): void;
    abstract triggerCancel(): void;
    /**
     * Return the component instance of dwContent when specify dwContent as a Component
     * Note: this method may return undefined if the Component has not ready yet. (it only available after Modal's ngOnInit)
     */
    abstract getContentComponent(): T;
    /**
     * Get the dom element of this Modal
     */
    abstract getElement(): HTMLElement;
    /**
     * Get the instance of the Modal itself
     */
    abstract getInstance(): DwModalComponent;
}
