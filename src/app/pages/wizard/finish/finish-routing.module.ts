import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FinishPage} from './finish.page';

import {OwllyIdGuard} from '../../../guards/owlly-id.guard';

const routes: Routes = [
  {
    path: '',
    component: FinishPage,
    canActivate: [OwllyIdGuard],
  },
  {
    path: ':owllyId',
    component: FinishPage,
    canActivate: [OwllyIdGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishPageRoutingModule {}
