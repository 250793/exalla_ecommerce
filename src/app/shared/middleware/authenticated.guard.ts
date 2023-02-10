import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SocialLoginService } from '../services/social-login.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAccount } from '../../model/account.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private httpClient: HttpClient,
    private socialLoginService: SocialLoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.socialLoginService.isAuthenticated();

    if (!isAuthenticated) {
      this.router.navigate([' '])
    }
    else {
      this.httpClient.get(`${environment.api}/account/me`,
      { headers: { Authorization: `Bearer ${this.socialLoginService.retrieveToken()}` } })
      .subscribe (
        {
        next: (value) => {
          this.socialLoginService.setAccount(value as IAccount);
        },
        error:  (err) => {
            this.router.navigate(['']).then(() => {
              this.socialLoginService.logOut()
              location.reload()
            })
        },
        }
      )}
    return isAuthenticated;
  }

}
