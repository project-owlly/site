import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {ServiceWorkerModule} from '@angular/service-worker';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

//import {HttpClientModule} from '@angular/common/http';

import {AngularFireModule} from '@angular/fire';
import {AngularFireFunctionsModule, REGION} from '@angular/fire/functions';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule } from "@angular/forms";
import {environment} from './../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    //HttpClientModule,
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
