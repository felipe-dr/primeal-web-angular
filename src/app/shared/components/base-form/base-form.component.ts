import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

export abstract class BaseFormComponent {
  public form!: FormGroup;
  public failures: string = '';

  constructor(protected router: Router) { }

  /**
   * Método que converte um 'AbstractControl' em 'FormControl'.
   * 
   * Como o 'property binding: control' é do tipo 'FormControl' e ao executar
   * form.get('nomeCampo'), o retorno será do tipo 'AbstractControl | null',
   * logo será retornado um erro. Porém utilizando esse método o retorno será
   * do tipo 'FormControl'.
   * 
   * @param {AbstractControl} field
   * @returns {FormControl}
   */
  public convertToFormControl(field: AbstractControl | null): FormControl {
    return field as FormControl;
  }

  /**
   * Método que valida se o campo foi 'tocado' ou 'sujo'.
   * 
   * @param {AbstractControl} field
   * @returns {boolean}
   */
  protected isTouchedOrDirty(field: AbstractControl): boolean {
    return field.touched || field.dirty;
  }

  /**
   * Método que valida se o campo é válido e se foi 'tocado' ou 'sujo'.
   * 
   * @param {AbstractControl} field
   * @returns {boolean}
   */
  protected isValidAndTouchedOrDirty(field: AbstractControl): boolean {
    return (field.valid && (this.isTouchedOrDirty(field)));
  }

  /**
   * Método que valida se o campo é inválido e se foi 'tocado' ou 'sujo'.
   * 
   * @param {AbstractControl} field
   * @returns {boolean}
   */
  protected isInvalidAndTouchedOrDirty(field: AbstractControl): boolean {
    return (field.invalid && (this.isTouchedOrDirty(field)));
  }

  /**
   * Método que irá retornar uma classe de estilo para representar se
   * o campo é válido ou inválido.
   * 
   * @param {AbstractControl | null} field
   * @returns {object | string} - Retorna uma das classes de estilo ou uma string vazia
   */
  public addClassFeedback(field: AbstractControl | null): object | string {
    if (field) {
      return {
        'is-element--valid': this.isValidAndTouchedOrDirty(field),
        'is-element--invalid': this.isInvalidAndTouchedOrDirty(field),
      };
    }

    return '';
  }

  protected resetForm(): void {
    this.form.reset();
  }

  /**
   * Método abstrato que deve ser implementado quando
   * essa classe for herdada.
   */
  protected abstract submit(): void;

  /**
   * Método que valida se o 'form' é valido para assim
   * invocar o método 'submit' que será especializado no
   * componente que herdar essa classe
   */
  public onSubmit(): void {
    if (this.form.valid) {
      this.submit();
    } else {
      this.form.markAllAsTouched();
    }
  }

  /**
   * Método que gerencia uma situação de sucesso quando o 'form' é submetido.
   * 
   * @param {string} message - Mensagem a ser renderizada
   * @param {string} route - Rota opcional
   */
  protected handleSuccess(message: string, route?: string): void {
    alert(message);

    if (route) {
      this.router.navigate([route]);
    }
  }

  /**
   * Método que gerencia uma situação de falha quando o 'form' é submetido. 
   * 
   * @param {Response} failure
   */
  protected handleFailure(failure: Response): void {
    this.failures = failure.statusText;
  }
}
