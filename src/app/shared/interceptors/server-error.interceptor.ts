import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { GlobalErrorHandler } from '../error-handler/error-handler';

export const serverErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const globalHandler = inject(GlobalErrorHandler);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      globalHandler.handleError(error.message);
      return throwError(() => new Error(error.message));
    })
  );
};
