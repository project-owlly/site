import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PdftestPageRoutingModule} from './pdftest-routing.module';

import {PdftestPage} from './pdftest.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PdftestPageRoutingModule],
  declarations: [PdftestPage],
})
export class PdftestPageModule {}
