import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map, throwError, catchError, of } from 'rxjs';
import { SocialLoginService } from '../services/social-login.service';
import { HttpClient } from '@angular/common/http';
import { IAccount } from '../../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class MeGuard implements CanActivate {

  constructor(
    private httpClient: HttpClient,
    private socialLoginService: SocialLoginService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.httpClient.get(`${environment.api}/account/me`, {
      headers: {
        Authorization: `Bearer ${this.socialLoginService.retrieveToken()}`
      }
    })
      .pipe(
        map((response: any) => {
          if (response.id === undefined) {
            return false;
          }

          console.log(response)

          this.socialLoginService.setAccount(response as IAccount)

          return true;
        }),
        catchError(error => of(true))
      )
  }
}
