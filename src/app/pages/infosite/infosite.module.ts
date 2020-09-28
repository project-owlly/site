import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {InfositePageRoutingModule} from './infosite-routing.module';

import {InfositePage} from './infosite.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InfositePageRoutingModule],
  declarations: [InfositePage],
})
export class InfositePageModule {}
