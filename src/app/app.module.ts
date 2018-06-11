import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatToolbarModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page.component/landing-page.component';
import { NavBarComponent } from './component/nav-bar.component/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
