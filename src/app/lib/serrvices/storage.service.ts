import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

   //Store the value
   setItem(key: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    localStorage.setItem(key, encryptedValue);
  }

  //Get the value
  getItem(key: string) {
    const res = localStorage.getItem(key);
    if (res) {
      return JSON.parse(unescape(atob(res)));
    } else {
      return false;
    }
  }
}
