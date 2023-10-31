import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { NavController, Content, Slides } from 
// import { IonicSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked{
  // @ViewChild(Slides) slides: Slides;
 
  // public images: any = [{
  //   images: '../../../assets/images/2.png',
  //   images: '../../../assets/images/3.png',

  // }];

  // swiperModules = [IonicSlides];

  // slideOpts = {
  //   speed: 400,
  //    // initialSlide: 0,
  //    // slidesPerView:1,
  //   autoplay: true,
  //   loop: true,
  //   // autoplay: {
  //   //   delay: 4000
  //   // }
  // };

 
  constructor(
    private menuController: MenuController,
    private router: Router
  ) {}

  bannerConfig! : SwiperOptions;
  banners: any[] = [];


  ngOnInit() {
    this.banners = [
      {banner: '../../../../assets/images/IMG-20231030-WA0000.jpg'},
      {banner: '../../../../assets/images/IMG-20231030-WA0000.jpg'},
      {banner: '../../../../assets/images/IMG-20231030-WA0000.jpg'},
      {banner: '../../../../assets/images/IMG-20231030-WA0000.jpg'},
    ];
  }

 
  ngAfterContentChecked(): void {
    this.bannerConfig = {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true
    };
  }

  

}
