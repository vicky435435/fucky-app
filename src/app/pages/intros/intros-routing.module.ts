import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrosPage } from './intros.page';

const routes: Routes = [
  {
    path: '',
    component: IntrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrosPageRoutingModule {}
