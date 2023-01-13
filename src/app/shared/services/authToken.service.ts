import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor(private readonly helper : JwtHelperService) { }

    isUserAuthenticated() {
        const token = localStorage.getItem("token");
        if (token && !this.helper.isTokenExpired(token)  ) {
            return true;
        }
        return false;
    }

    setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    getToken(): string {
        return localStorage.getItem('token')!;
    }


    logOut() :void {
        localStorage.clear();
    }


}
