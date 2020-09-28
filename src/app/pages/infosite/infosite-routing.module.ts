import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {InfositePage} from './infosite.page';

const routes: Routes = [
  {
    path: '',
    component: InfositePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfositePageRoutingModule {}
