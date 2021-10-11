import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputContainerComponent } from './components/input-container/input-container.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

import { AutoFocusDirective } from './directives/auto-focus/auto-focus.directive';

@NgModule({
  declarations: [
    InputContainerComponent,
    ErrorMessageComponent,
    AutoFocusDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    InputContainerComponent,
    ErrorMessageComponent,
    AutoFocusDirective
  ]
})
export class SharedModule { }
