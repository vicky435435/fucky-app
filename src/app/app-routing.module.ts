import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { IntrosPage } from './pages/intros/intros.page';

const routes: Routes = [
  {
    path: 'intros',
    loadChildren: () => import('./pages/intros/intros.module').then( m => m.IntrosPageModule)
  },
  {
    path: '',
    redirectTo: 'intros',
    pathMatch: 'full'
  },
  // {
  //   path: 'intro',
  //   loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  // },
  {
    path: 'intros',
    loadChildren: () => import('./pages/intros/intros.module').then( m => m.IntrosPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
