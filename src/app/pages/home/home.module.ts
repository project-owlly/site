import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {ComponentsModule} from 'src/app/components/core/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, ComponentsModule, ReactiveFormsModule],
  declarations: [HomePage],
})
export class HomePageModule {}
