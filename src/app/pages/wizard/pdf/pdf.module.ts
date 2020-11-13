import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PdfPageRoutingModule} from './pdf-routing.module';

import {PdfPage} from './pdf.page';
import {ComponentsModule} from '../../../components/core/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PdfPageRoutingModule, ComponentsModule],
  declarations: [PdfPage],
})
export class PdfPageModule {}
