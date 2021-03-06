import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { BaseService } from './base.service';

import { User } from '@features/auth/models/user.model';
import { localStorageUtil } from '@core/utils/local-storage/local-storage.util';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<User> {
  constructor(protected http: HttpClient) {
    super(http, 'users');
  }

  /**
   * Método que efetua uma operação 'http' do tipo 'post' representando uma ação
   * de 'login'.
   * 
   * @param {Partial<User>} user - Recebe um modelo do tipo 'User'
   * @returns {Observable<Partial<User>>}
   */
  public login(user: Partial<User>): Observable<Partial<User>> {
    return this.http
      .post<Partial<User>>(`${this.endpoint}/login`, user)
      .pipe(tap((user) => {
        localStorageUtil.setItem('user', JSON.stringify(user));
      }));
  }
}
