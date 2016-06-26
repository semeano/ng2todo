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
  defaultFirebase({
    apiKey: "AIzaSyC79hFzTkPgyJlRG3Cs6BbPCpl-AIUYaOM",
    authDomain: "ng2todo-20292.firebaseapp.com",
    databaseURL: "https://ng2todo-20292.firebaseio.com",
    storageBucket: "ng2todo-20292.appspot.com",
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Anonymous,
    method: AuthMethods.Anonymous
  }),
  HTTP_PROVIDERS
]);
