import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DwIamMenuRepository {
  constructor(private http: HttpClient) { }

  getMenu(): Observable<any> {
    const params: object = {param: {}};
    return this.http.post('DWSys/IFunctionPermissionService/getMenu', params);
  }
}

