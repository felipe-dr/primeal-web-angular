const DEFAULT_KEY_PREFIX: string = 'primeal.';

export class localStorageUtil {
  /**
   * Método que adiciona um item ao 'local storage'.
   * 
   * @param {string} key 
   * @param {string} value 
   */
  public static setItem(key: string, value: string, keyPrefix: string = DEFAULT_KEY_PREFIX): void {
    localStorage.setItem(`${keyPrefix}${key}`, value);
  }

  /**
   * Método que remove um ou mais itens do 'local storage'.
   * 
   * @param {string[]} keys 
   */
  public static removeItens(...keys: string[]): void {
    keys.forEach(key => localStorage.removeItem(key))
  }

  /**
   * Método que busca um item do 'local storage'.
   * 
   * @param {string} key 
   * @returns {string | null}
   */
  public static getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * Método que valida se um item existe ou não no 'local storage'.
   * 
   * @param {string} key 
   * @returns {boolean}
   */
  public static hasItem(key: string): boolean {
    return !!this.getItem(key);
  }
}
