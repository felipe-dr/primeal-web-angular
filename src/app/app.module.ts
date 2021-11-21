import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@core/core.module';
import { NgbModule } from '@shared/modules/ngb.module';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { ContentLayoutComponent } from '@layout/content-layout/content-layout.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentLayoutComponent,
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
