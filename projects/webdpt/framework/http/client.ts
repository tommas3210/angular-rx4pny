import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { IDwRequestOptions, IDwRequestUiOptions } from './interface/client.interface';
import { DwSystemHttpErrorHandler } from './system-error';
import { DwHttpClientOptionsService } from './service/http-client-options.service';
import { IDwLoadMaskCfg } from '../components/loading/interface/loading.interface';
import { DwLoadingMaskService } from '../components/loading/service/loading-mask.service';

@Injectable()
export abstract class DwHttpClient {
  protected systemHttpError: DwSystemHttpErrorHandler;
  protected http: HttpClient;
  protected api = '';
  private throwawayHeader: { [header: string]: string | string[] };

  public constructor(
    public dwHttpClientOptionsService: DwHttpClientOptionsService,
    public dwLoadingMaskService: DwLoadingMaskService
  ) {
    this.systemHttpError = inject(DwSystemHttpErrorHandler);
    this.http = inject(HttpClient);
    // this.initialize();
  }

  // protected abstract initialize(): void;

  protected errorHandler(error: HttpErrorResponse): void { }
  protected responseIntercept(body: any): any {
    return body;
  }

  protected get defaultHeaders(): { [header: string]: string | string[] } {
    return {};
  }

  protected get defaultParams(): { [param: string]: string } {
    return {};
  }

  public setThrowawayHeader(header: { [header: string]: string | string[] }): void {
    this.throwawayHeader = header;
  }

  private addDefaultOption(options?: IDwRequestOptions): any {
    const localOptions = options || {};

    let headers: HttpHeaders;
    if (localOptions.headers instanceof HttpHeaders) {
      headers = localOptions.headers;
    } else {
      headers = new HttpHeaders(localOptions.headers);
    }

    const localHeaders = this.throwawayHeader || this.defaultHeaders;
    this.throwawayHeader = undefined;

    headers = Object.keys(localHeaders)
      .reduce((acc, name) => (acc.has(name)) ? acc : acc.set(name, localHeaders[name]), headers);

    let params: HttpParams;
    if (!!localOptions.params) {
      if (localOptions.params instanceof HttpParams) {
        params = localOptions.params;
      } else {
        params = new HttpParams({ fromObject: localOptions.params });
      }
    }

    params = Object.keys(this.defaultParams)
      .reduce((acc, name) => (acc.has(name)) ? acc : acc.set(name, this.defaultParams[name]), params);


    return {
      headers,
      observe: localOptions.observe,
      params,
      body: localOptions.body,
      reportProgress: localOptions.reportProgress,
      responseType: localOptions.responseType,
      withCredentials: localOptions.withCredentials
    };
  }

  private requestProcess(request: Observable<any>, options?: IDwRequestOptions): Observable<any> {
    const uiOptions: IDwRequestUiOptions = this.dwHttpClientOptionsService.getUiOptions(options);
    // 加載遮罩
    const loadMaskCfg: IDwLoadMaskCfg = this.dwHttpClientOptionsService.getLoadingMaskCfg(uiOptions);
    const loadingMaskId = this.dwLoadingMaskService.auto(loadMaskCfg.spinning, loadMaskCfg.delay, loadMaskCfg.tip);

    return request.pipe(
      tap(
        response => {
          this.dwLoadingMaskService.hide(loadingMaskId);
          return response;
        },
        error => {
          this.dwLoadingMaskService.hide(loadingMaskId);
          this.systemHttpError.handlerError(error);
          this.errorHandler(error);
        }
      ),
      map(response => this.responseIntercept(response))
    );
  }

  public request<T>(method: string, url: string, options?: IDwRequestOptions): Observable<any> {
    const requestOptions = this.addDefaultOption(options);
    const request = this.http.request<T>(method, this.api + url, requestOptions);
    return this.requestProcess(request, options);
  }

  public get<T>(url: string, options?: IDwRequestOptions): Observable<any> {
    const requestOptions = this.addDefaultOption(options);
    const request = this.http.get<T>(this.api + url, requestOptions);
    return this.requestProcess(request, options);
  }

  public post<T>(url: string, body: Object, options?: IDwRequestOptions): Observable<any> {
    const requestOptions = this.addDefaultOption(options);
    const request = this.http.post<T>(this.api + url, body, requestOptions);
    return this.requestProcess(request, options);
  }

  public put<T>(url: string, body: Object, options?: IDwRequestOptions): Observable<any> {
    const requestOptions = this.addDefaultOption(options);
    const request = this.http.put<T>(this.api + url, body, requestOptions);
    return this.requestProcess(request, options);
  }

  public delete<T>(url: string, options: IDwRequestOptions): Observable<any> {
    const requestOptions = this.addDefaultOption(options);
    const request = this.http.delete<T>(this.api + url, requestOptions);
    return this.requestProcess(request, options);
  }
}
