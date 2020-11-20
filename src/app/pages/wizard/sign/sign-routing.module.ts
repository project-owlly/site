import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SignPage} from './sign.page';

const routes: Routes = [
  {
    path: '',
    component: SignPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignPageRoutingModule {}
