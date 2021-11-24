import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BaseFormComponent } from '@shared/components/base-form/base-form.component';

import { AuthService } from '@core/services/auth.service';

import { User } from '@features/auth/models/user.model';
import { FormValidationsUtil } from '@core/utils/validations/form-validations.util';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    protected router: Router
  ) {
    super(router);
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, FormValidationsUtil.emailPattern]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    }, {
      updateOn: 'blur'
    });
  }

  /**
   * Método que faz o 'submit' do 'form' efetuando o 'login'.
   */
  public submit(): void {
    const user: User = this.form.getRawValue();

    this.authService.login(user)
      .subscribe(
        () => this.handleSuccess('Login efetuado com sucesso!', '/home'),
        failure => this.handleFailure(failure)
      );
  }
}
