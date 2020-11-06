import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ReturnPageRoutingModule} from './return-routing.module';

import {ReturnPage} from './return.page';

import {ComponentsModule} from 'src/app/components/core/components.module';
import {SignatureModule} from '../../components/signature/signature.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReturnPageRoutingModule, ComponentsModule, SignatureModule],
  declarations: [ReturnPage],
})
export class ReturnPageModule {}
