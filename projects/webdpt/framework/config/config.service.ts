import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, first, map, skipUntil, skipWhile } from 'rxjs/operators';

@Injectable()
export class DwSystemConfigService {
  private _config: any;
  private apiLoaded$ = new BehaviorSubject(null);
  setConfig(result: Object): void {
    this._config = result;
    this.apiLoaded$.next(result);
  }

  get(key: string): Observable<any> {
    return this.apiLoaded$.pipe(
      map(
        result => {
          return result ? (result[key] ? result[key] : '') : result;
        }
      ),
      skipWhile(result =>  {
        return result === null;
      })
    );
  }

  getConfig(): Observable<any> {
    return this.apiLoaded$.pipe(
      skipWhile(result =>  {
        return result === null;
      })
    );
  }
}
