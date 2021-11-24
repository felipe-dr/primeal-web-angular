import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { localStorageUtil } from '@core/utils/local-storage/local-storage.util';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  /**
   * Método que valida se já existe usuário logado e caso positivo não será
   * permitido acessar a rota a ser protegida.
   * 
   * @returns {boolean}
   */
  public canActivate(): boolean {
    if (localStorageUtil.getItem('primeal.user')) {
      this.router.navigate(['/home']);

      return false;
    }

    return true;
  }
}
