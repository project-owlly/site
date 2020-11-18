import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {SuccessPageRoutingModule} from './success-routing.module';

import {SuccessPage} from './success.page';
import {ComponentsModule} from '../../../components/core/components.module';

@NgModule({
  imports: [CommonModule, IonicModule, SuccessPageRoutingModule, ComponentsModule],
  declarations: [SuccessPage],
})
export class SuccessPageModule {}
