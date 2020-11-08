import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StartPage} from './start.page';

import {StartGuard} from './start.guard';

const routes: Routes = [
  {
    path: '',
    component: StartPage,
    canActivate: [StartGuard],
  },
  {
    path: ':owllyId',
    component: StartPage,
    canActivate: [StartGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}
