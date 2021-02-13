import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SnowModule } from './components/snow/snow.module';
import { HeartCascadeModule } from './components/heart-cascade/heart-cascade.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SnowModule,
    HeartCascadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
