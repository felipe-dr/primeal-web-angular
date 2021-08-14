import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    AboutRoutingModule
  ]
})
export class AboutModule { }
