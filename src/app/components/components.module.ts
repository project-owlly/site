import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {FooterComponent} from '../components/footer/footer.component';

import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [IonicModule, CommonModule],
})
export class ComponentsModule {}
