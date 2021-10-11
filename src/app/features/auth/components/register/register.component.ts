import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { BaseFormComponent } from '@shared/components/base-form/base-form.component';

import { FormValidationsUtil } from '@core/utils/validations/form-validations.util';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent extends BaseFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, FormValidationsUtil.emailPattern]],

      auth: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
      })
    }, {
      validators: FormValidationsUtil.equalsTo('auth.password', 'auth.confirmPassword'),
      updateOn: 'blur'
    });
  }

  public submit(): void {

  }
}
