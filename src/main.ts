import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Ng2todoAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthProviders, AuthMethods } from 'angularfire2';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2todoAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://ng2tododb.firebaseio.com/'),
  firebaseAuthConfig({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    }),
  HTTP_PROVIDERS
]);
