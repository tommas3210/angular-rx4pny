import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { DwLoggingService } from '../log/logging.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class DwErrorHandler extends ErrorHandler {

  constructor(private injector: Injector) {
    super();
  }

  handleError(error: any): void {
    const logging = this.injector.get(DwLoggingService);
    if (error instanceof HttpErrorResponse) {
      logging.httpError(error);
    } else {
      logging.runtimeError(error);
    }
  }
}
