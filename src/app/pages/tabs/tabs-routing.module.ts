import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children : [

      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'batches',
        loadChildren: () => import('./batches/batches.module').then( m => m.BatchesPageModule)
      },
      {
        path: 'store',
        loadChildren: () => import('./store/store.module').then( m => m.StorePageModule)
      },
      {
        path: 'chats',
        loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo : '/tabs/home',
        pathMatch : 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
