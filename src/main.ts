import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if(navigator.geolocation) {
  console.log(navigator.geolocation.getCurrentPosition(res=> {
    console.log(res);
  }))
} else {
  console.log('no navigator');
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
