import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { NavController, Content, Slides } from 


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // @ViewChild(Slides) slides: Slides;
 
  // public images: any = [{
  //   images: '../../../assets/images/2.png',
  //   images: '../../../assets/images/3.png',

  // }];

  constructor(
    private menuController: MenuController,
    private router: Router
  ) {}


  ngOnInit() {
  }

  closeMenu() {
    this.menuController.close();
  }

  openPage(page: string) {
    this.router.navigate([page]);
    this.menuController.close();
  }

  

}
