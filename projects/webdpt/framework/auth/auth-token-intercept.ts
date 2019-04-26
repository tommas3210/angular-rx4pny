import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DwAuthService } from './auth.service';
import { tap } from 'rxjs/operators';


/**
 * 統一加相關資訊到http headers
 */
@Injectable()
export class DwAuthTokenIntercept implements HttpInterceptor {

  constructor(public auth: DwAuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      setHeaders: this.auth.getTokenHeaders(req.url)
    });

    return next.handle(req).pipe(
      tap(
        (response: any) => {
          // debugger;
          // // assets\i18n\*.json 格式也要和後端API一致
          // if (response.hasOwnProperty('body')) {
          //   response.body = response.body.response;
          // }

          return response;
        },
        (event: HttpEvent<any>) => {
          // status = 5xx or 4xx ...
        }
      )
    );
  }


}
