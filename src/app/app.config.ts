import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { GlobalErrorHandler } from './shared/error-handler/error-handler';
import { httpInterceptor } from './shared/interceptors/http.interceptor';
import { serverErrorInterceptor } from './shared/interceptors/server-error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([httpInterceptor, serverErrorInterceptor])),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
};
