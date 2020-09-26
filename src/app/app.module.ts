import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule, FUNCTIONS_REGION } from '@angular/fire/functions';

import { environment } from './../environments/environment'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireFunctionsModule
  ],
  providers: [

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FUNCTIONS_REGION, useValue: 'europe-west6' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
