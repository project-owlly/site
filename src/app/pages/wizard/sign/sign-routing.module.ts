import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SignPage} from './sign.page';

import {OwllyIdGuard} from '../../../guards/owlly-id.guard';

const routes: Routes = [
  {
    path: '',
    component: SignPage,
    canActivate: [OwllyIdGuard],
  },
  {
    path: ':owllyId',
    component: SignPage,
    canActivate: [OwllyIdGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignPageRoutingModule {}
