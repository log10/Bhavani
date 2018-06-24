import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CovalentMediaModule } from '@covalent/core/media';

import {
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';

import { RoutingModule } from './module/router.module/router.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page.component/landing-page.component';
import { NavBarComponent } from './component/nav-bar.component/nav-bar.component';
import { GridContentComponent } from './component/grid-content.component/grid-content.component';
import { GridViewComponent } from './component/grid-view.component/grid-view.component';
import { ReaderComponent } from './component/reader.component/reader.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    GridContentComponent,
    GridViewComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    RoutingModule,
    CovalentMediaModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
