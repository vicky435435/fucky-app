import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private menuController: MenuController,private router: Router) {}

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
