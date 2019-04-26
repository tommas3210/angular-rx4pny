import { Injectable } from '@angular/core';
import { IDwCreate } from '../interface/create-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DwCreateService implements IDwCreate {

  constructor(private http: HttpClient) { }

  create(url: string, data: object): Observable<any> {
    return this.http.post(url, {dataset: data});
  }
}
