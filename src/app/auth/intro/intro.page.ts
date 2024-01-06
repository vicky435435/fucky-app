import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  activeIndex: any;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSlideChange(event: any) {
    console.log(event);
    console.log(event?.detail[0].activeIndex)
    this.activeIndex = event?.detail[0].activeIndex;

    console.log(this.activeIndex)
  }

  skipTheGuide(){
    this.activeIndex = 2;
  }

  getStarted(){
    this.router.navigate(['/login']);
  }

}
