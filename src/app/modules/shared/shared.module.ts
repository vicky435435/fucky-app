import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from 'src/app/pages/login/login.page';
import { SignUpPage } from 'src/app/pages/sign-up/sign-up.page';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports : [
    CommonModule, 
  ]
})
export class SharedModule { }
