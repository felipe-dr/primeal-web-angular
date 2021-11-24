import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BaseFormComponent } from '@shared/components/base-form/base-form.component';

import { AuthService } from '@core/services/auth.service';

import { User } from '@features/auth/models/user.model';
import { FormValidationsUtil } from '@core/utils/validations/form-validations.util';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    protected router: Router
  ) {
    super(router);
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, FormValidationsUtil.emailPattern]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    }, {
      validators: FormValidationsUtil.equalsTo('password', 'confirmPassword'),
      updateOn: 'blur'
    });
  }

  /**
   * Método que faz o 'submit' do 'form' efetuando o registro de um novo
   * usuário.
   */
  public submit(): void {
    const user: User = this.form.getRawValue();

    this.authService.create(user)
      .subscribe(
        () => this.handleSuccess('Conta criada com sucesso!', '/home'),
        failure => this.handleFailure(failure)
      );
  }
}
