import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { User } from '../class/user'
import { RoleserviceService } from './roleservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private rolesservice: RoleserviceService, private router: Router) { }
  canActivate(): boolean {
    if (this.rolesservice.loggedIn()) {
      return true;
    } else {
      this.router.navigate(["/dashboard"]);
      return false;
    }
  }
}