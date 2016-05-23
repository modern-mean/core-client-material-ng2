import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ModernMeanCoreClientMaterialNg2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ModernMeanCoreClientMaterialNg2AppComponent);

