import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  /*
    {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },*/
  {
    path: 'pdftest',
    loadChildren: () => import('./pages/pdftest/pdftest.module').then((m) => m.PdftestPageModule),
  },
  {
    path: 'infosite',
    loadChildren: () => import('./pages/infosite/infosite.module').then((m) => m.InfositePageModule),
  },
  {
    path: 'impressum',
    loadChildren: () => import('./pages/impressum/impressum.module').then((m) => m.ImpressumPageModule),
  },
  {
    path: 'return',
    loadChildren: () => import('./pages/return/return.module').then((m) => m.ReturnPageModule),
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then((m) => m.TestPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
