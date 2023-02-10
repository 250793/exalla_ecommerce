import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocialLoginService } from '../services/social-login.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private socialLoginService: SocialLoginService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(environment.api)) {
      if (this.socialLoginService.isAuthenticated()) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.socialLoginService.retrieveToken()}`
          }
        })
      }
    }

    return next.handle(request);
  }
}
