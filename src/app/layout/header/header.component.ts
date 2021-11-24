import { Component } from '@angular/core';

import { localStorageUtil } from '@core/utils/local-storage/local-storage.util';
import { User } from '@features/auth/models/user.model';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public isMenuCollapsed = true;

  /**
   * Método que valida se o usuário está logado a partir do 'local storage'.
   * 
   * @returns {boolean}
   */
  public isLoggedIn(): boolean {
    return localStorageUtil.hasItem('primeal.user');
  }

  /**
   * Método que obtém o usuário a partir do 'local storage'.
   * 
   * @returns {User | null}
   */
  public getUser(): User | null {
    const storedUser = localStorageUtil.getItem('primeal.user');

    return storedUser ? JSON.parse(storedUser) : null;
  }

  /**
   * Método que remove os itens de conta do 'local storage'.
   */
  public logout(): void {
    localStorageUtil.removeItens('primeal.user', 'primeal.token')
  }
}
