import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {InfositePageRoutingModule} from './infosite-routing.module';

import {InfositePage} from './infosite.page';

import {ComponentsModule} from 'src/app/components/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InfositePageRoutingModule, ComponentsModule],
  declarations: [InfositePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InfositePageModule {}
