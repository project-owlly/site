
import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pdftest',
    loadChildren: () => import('./pages/pdftest/pdftest.module').then((m) => m.PdftestPageModule),
  },
  {
    path: 'infosite',
    loadChildren: () => import('./pages/infosite/infosite.module').then((m) => m.InfositePageModule),
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'impressum',
    loadChildren: () => import('./pages/impressum/impressum.module').then( m => m.ImpressumPageModule)
  },
  {
    path: 'newsletter',
    loadChildren: () => import('./pages/newsletter/newsletter.module').then( m => m.NewsletterPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
