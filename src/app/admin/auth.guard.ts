import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { User } from '../class/user'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  user: any = {}
  constructor(private auth: ApiService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.signin(this.user)) {
      this.router.navigateByUrl("/");
      return false;
    }


    return true;
  }





}
