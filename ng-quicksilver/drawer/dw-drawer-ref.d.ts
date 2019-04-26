import { Observable } from 'rxjs/index';
export declare abstract class DwDrawerRef<R = any> {
    abstract afterClose: Observable<R>;
    abstract afterOpen: Observable<void>;
    abstract close(result?: R): void;
    abstract open(): void;
}
