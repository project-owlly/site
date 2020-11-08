import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {SignatureComponent} from './signature.component';

@NgModule({
  declarations: [SignatureComponent],
  imports: [CommonModule, IonicModule],
  exports: [SignatureComponent],
})
export class SignatureModule {}
