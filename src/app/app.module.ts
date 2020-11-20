import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {ServiceWorkerModule} from '@angular/service-worker';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {AngularFireModule} from '@angular/fire';
import {AngularFireFunctionsModule, REGION} from '@angular/fire/functions';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {environment} from './../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: REGION, useValue: 'europe-west6'},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
