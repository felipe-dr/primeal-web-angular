import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { localStorageUtil } from '@core/utils/local-storage/local-storage.util';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  /**
   * Método que intercepta qualquer requisição 'http' validando se existe 
   * usuário logado e caso positivo será adicionado no 'header Authorization' 
   * o 'accessToken' obtido do 'local storage'.
   * 
   * @param {HttpRequest<unknown>} request 
   * @param {HttpHandler} next 
   * @returns {Observable<HttpEvent<unknown>>}
   */
  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const storedUser: string | null = localStorageUtil.getItem('primeal.user');

    if (storedUser) {
      const token: string = JSON.parse(storedUser).accessToken;
      const headers: HttpHeaders = new HttpHeaders().append('Authorization', `Bearer ${token}`);

      request = request.clone({ headers });
    }

    return next.handle(request);
  }
}
