import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  
  segment: string;
  constructor() {
    this.segment = "1";
   }

  ngOnInit() {
  }

}
