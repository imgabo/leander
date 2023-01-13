import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthTokenService } from '../services/authToken.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(private readonly router : Router , private readonly _token : AuthTokenService){}
    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(!this._token.isUserAuthenticated()){
          return true;
        }else{
          this.router.navigate(['/home']);
          return false;
        }
      }

}
