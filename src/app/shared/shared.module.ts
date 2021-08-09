import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from './ngb.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
    NgbModule
  ]
})
export class SharedModule { }
