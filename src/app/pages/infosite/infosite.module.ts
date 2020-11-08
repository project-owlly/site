import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {InfositePageRoutingModule} from './infosite-routing.module';

import {InfositePage} from './infosite.page';

import {ComponentsModule} from 'src/app/components/core/components.module';
import {SignatureModule} from '../../components/signature/signature.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InfositePageRoutingModule, ComponentsModule, SignatureModule],
  declarations: [InfositePage],
})
export class InfositePageModule {}
