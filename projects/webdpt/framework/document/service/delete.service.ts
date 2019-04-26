import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDwDelete } from '../interface/delete-interface';


@Injectable()
export class DwDeleteService implements IDwDelete {
  constructor(public http: HttpClient) { }
  delete(url: string, oid: any): Observable<any> {
    if (Array.isArray(oid)) {
      return this.http.request('DELETE', url, { body: {oids: oid} });
    } else {
      return this.http.request('DELETE', url, { body: {dataset: oid} });
    }
  }
}
