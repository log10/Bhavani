/// <reference path="./typings.d.ts" />
// import scss
import './assets/main.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from 'environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    // Uncomment following line to disable zone sync
    // ngZone: 'noop'
  })
  .catch(err => console.log(err));
