import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StartPage} from './start.page';

import {OwllyIdGuard} from '../../../guards/owlly-id.guard';

const routes: Routes = [
  {
    path: '',
    component: StartPage,
    canActivate: [OwllyIdGuard],
  },
  {
    path: ':owllyId',
    component: StartPage,
    canActivate: [OwllyIdGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}
