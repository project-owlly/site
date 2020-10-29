import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TestPageRoutingModule} from './test-routing.module';

import {TestPage} from './test.page';



@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, TestPageRoutingModule],
  declarations: [TestPage],
})
export class TestPageModule {}
