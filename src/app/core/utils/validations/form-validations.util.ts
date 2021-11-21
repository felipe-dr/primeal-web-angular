import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { RegexUtil } from './regex.util';

export class FormValidationsUtil {
  /**
   * Método que valida se o e-mail recebido no parâmetro é válido, conforme
   * o 'pattern' definido.
   * 
   * @param {FormControl} emailField - E-mail obtido no formulário
   * @returns {null | pattern: true}
   */
  public static emailPattern(emailField: FormControl): null | object {
    return RegexUtil.email.test(emailField.value) ? null : { pattern: true };
  }

  /**
   * Método que valida se o valor dos dois 'AbstractControl' são diferentes.
   * 
   * @param {string} firstValue - Nome do primeiro control a ser pesquisado
   * @param {string} secondValue - Nome do segundo control a ser pesquisado
   * @returns {null | equalsTo: true}
   */
  public static equalsTo(firstValue: string, secondValue: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const firstControl = controls.get(firstValue);
      const secondControl = controls.get(secondValue);

      if (secondControl?.errors && !secondControl.errors.equalsTo) {
        return null;
      }

      if (firstControl?.value !== secondControl?.value) {
        const equalsTo = { equalsTo: true };
        secondControl?.setErrors(equalsTo);

        return equalsTo;
      }

      secondControl?.setErrors(null);
      return null;
    }
  }

  /**
   * Método que retorna a mensagem do erro atual e de forma padronizada.
   * 
   * @param {string} fieldName - Nome do campo que será exibido
   * @param {string} validatorName - Nome do validador
   * @param {ValidationErrors} validatorValue - Valor do validador opcional
   * @returns {ValidationErrors}
   */
  public static getErrorMessage(fieldName: string, validatorName: string, validatorValue?: ValidationErrors): ValidationErrors {
    const validationErrors: ValidationErrors = {
      required: `${fieldName} é obrigatório.`,
      minlength: `${fieldName} precisa ter no mínimo ${validatorValue?.requiredLength} caracteres.`,
      maxlength: `${fieldName} precisa ter no máximo ${validatorValue?.requiredLength} caracteres.`,
      equalsTo: `${fieldName} não confere.`,
      pattern: `${fieldName} inválido.`,
    };

    return validationErrors[validatorName];
  }
}
