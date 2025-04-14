import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { JwtInterceptor } from './shared/interceptor/jwt.interceptor';

import { routes } from './app.routes';
import { MyPreset } from '../mypreset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: MyPreset,
            options: {
              darkModeSelector: false || 'none'
            },
        },
    }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([JwtInterceptor])),
  ]
};
