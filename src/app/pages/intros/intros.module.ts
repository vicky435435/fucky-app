import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrosPageRoutingModule } from './intros-routing.module';

import { IntrosPage } from './intros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrosPageRoutingModule,
  ],
  schemas :[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [IntrosPage]
})
export class IntrosPageModule {}
