import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

export abstract class BaseService<T> {
  protected readonly endpoint: string;

  constructor(
    protected http: HttpClient,
    protected resourcePath: string
  ) {
    this.endpoint = environment.apiUrl + resourcePath;
  }

  /**
   * Método que efetua uma operação 'http' do tipo 'post'.
   * 
   * @param {T} dto - Representa um 'data transfer object' de um tipo a ser especializado
   * @returns {Observable<T>}
   */
  public create(dto: T): Observable<T> {
    return this.http.post<T>(this.endpoint, dto);
  }
}
