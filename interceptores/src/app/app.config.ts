import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
//Importar la solicitud http
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//Importar el interceptor
import { AuthInterceptor } from './interceptors/auth-interceptor';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    {
      provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true
    }
  ]
};
