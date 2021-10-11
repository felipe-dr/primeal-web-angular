import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { BaseFormComponent } from '@shared/components/base-form/base-form.component';

import { FormValidationsUtil } from '@core/utils/validations/form-validations.util';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends BaseFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, FormValidationsUtil.emailPattern]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    }, {
      updateOn: 'blur'
    });
  }

  public submit(): void {

  }
}
