import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/lib/serrvices/storage.service';
import { Constants } from 'src/app/lib/shared/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private storageservice: StorageService,public router: Router) { }

  ngOnInit() {
  }

  login(){
    this.storageservice.setItem(Constants.LOGIN_NAME, 'funckyApp')
    this.router.navigate(['/home']);
  }

}
