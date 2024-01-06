import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../serrvices/storage.service';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(public storage: StorageService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const intro = localStorage.getItem('funckyApp');
      if (intro != undefined) {
        console.log('true')
        return true;
      } else {
        this.router.navigate(['intro']);
        console.log("false")
        return false;
      }
  }
  
}
