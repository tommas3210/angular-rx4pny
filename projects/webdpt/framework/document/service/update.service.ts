import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDwUpdate } from '../interface/update-interface';


@Injectable()
export class DwUpdateService implements IDwUpdate {
  constructor(public http: HttpClient) { }
  update(url: string, data: object): Observable<any> {
    return this.http.put(url, {dataset: data});
  }
}
