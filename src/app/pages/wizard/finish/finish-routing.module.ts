import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FinishPage} from './finish.page';

const routes: Routes = [
  {
    path: '',
    component: FinishPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishPageRoutingModule {}
