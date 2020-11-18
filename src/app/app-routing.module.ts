import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {EidGuard} from './guards/eid.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'home',
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
  },
  */
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
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then((m) => m.TestPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/wizard/start/start.module').then((m) => m.StartPageModule),
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then((m) => m.CreatePageModule),
  },
  {
    path: 'return',
    canActivate: [EidGuard],
    children: [],
  },
  {
    path: 'pdf',
    loadChildren: () => import('./pages/wizard/pdf/pdf.module').then((m) => m.PdfPageModule),
  },
  {
    path: 'success',
    loadChildren: () => import('./pages/auth/success/success.module').then((m) => m.SuccessPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'admin/newsletter',
    loadChildren: () => import('./pages/admin/newsletter/newsletter.module').then((m) => m.NewsletterPageModule),
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/admin/create/create.module').then((m) => m.CreatePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
