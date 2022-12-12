import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CountryPageComponent } from './country/components/country-page/country-page.component';
import { SummaryModule } from './summary/summary.module';
import { LiveModule } from './live/live.module';
import { CountryModule } from './country/country.module';

@NgModule({
  declarations: [
    AppComponent,
    CountryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SummaryModule,
    CountryModule,
    LiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
