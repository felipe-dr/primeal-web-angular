import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormValidationsUtil } from '@core/utils/validations/form-validations.util';

@Component({
  selector: 'pm-error-message',
  templateUrl: './error-message.component.html'
})
export class ErrorMessageComponent {
  @Input() public label!: string;
  @Input() public control!: FormControl;

  constructor() { }

  public get errorMessage(): FormValidationsUtil | null {
    for (const propertyName in this.control?.errors) {
      if (this.control?.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return FormValidationsUtil.getErrorMessage(this.label, propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
