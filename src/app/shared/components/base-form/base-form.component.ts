import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

export abstract class BaseFormComponent {
  public form!: FormGroup;

  /**
   * Método que converte um 'AbstractControl' em 'FormControl'
   * 
   * Como o 'property binding: control' é do tipo 'FormControl' e ao executar
   * form.get('nomeCampo'), o retorno será do tipo 'AbstractControl | null',
   * logo será retornado um erro. Porém utilizando esse método o retorno será
   * do tipo 'FormControl'
   * 
   * @param field: recebe 
   * @returns: FormControl
   */
  public convertToFormControl(field: AbstractControl | null): FormControl {
    return field as FormControl;
  }

  protected isTouchedOrDirty(field: AbstractControl): boolean {
    return field.touched || field.dirty;
  }

  protected isValidAndTouchedOrDirty(field: AbstractControl): boolean {
    return (field.valid && (this.isTouchedOrDirty(field)));
  }

  protected isInvalidAndTouchedOrDirty(field: AbstractControl): boolean {
    return (field.invalid && (this.isTouchedOrDirty(field)));
  }

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
   * Método abstrato em que deve ser implementado quando
   * essa classe for herdada
   */
  protected abstract submit(): void;

  /**
   * Método que valida se o 'form' é valido para assim
   * invocar o método 'submit' em que será especializado no
   * componente que herdar essa classe
   */
  public onSubmit(): void {
    if (this.form.valid) {
      this.submit();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
