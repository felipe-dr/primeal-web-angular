import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';

const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }
]

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
