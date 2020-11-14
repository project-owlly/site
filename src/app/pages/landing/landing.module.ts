import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {LandingPage} from './landing.page';

import {LandingPageRoutingModule} from './landing-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LandingPageRoutingModule, ComponentsModule, ReactiveFormsModule],
  declarations: [LandingPage],
})
export class LandingPageModule {}
