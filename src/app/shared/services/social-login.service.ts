import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';
import { IAccount } from '../../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private httpClient: HttpClient,
    private errorService: ErrorService,
  ) {
  }

  setAccount(account: IAccount) {
    sessionStorage.setItem('@account_data', JSON.stringify(account))
  }

  getAccount(): IAccount | undefined {
    const value = sessionStorage.getItem('@account_data');

    if (value === null) {
      return undefined;
    }

    return JSON.parse(
      sessionStorage.getItem('@account_data')!
    )
  }

  signUp(data: any, callback?: any){
    console.log(data)
    return this.httpClient.post(`${environment.api}/account/register`, {
      provider: 'credentials',
      ...data,
    })
      .pipe(
        catchError(this.handleError),
      ).subscribe({
        next: (value: any) => {
          localStorage.setItem('@access_token', value.access_token)

          sessionStorage.setItem('@account_data', JSON.stringify(value.account))

          callback()
        },
        error: (error) => {
          console.log(error)
          this.errorService.setError({
            name: error.message,
            statusCode: error.statusCode

          })
        }
      })
  }


  signIn(type: 'google' | 'facebook' | 'credentials', data?: any, callback?: any) {
    let provider = undefined;

    if (type === 'facebook') {
      provider = new firebase.auth.FacebookAuthProvider();
    } else if (type === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();

      provider.addScope('email');
    }

    if (type !== 'credentials' && provider) {
      this.angularFireAuth.signInWithPopup(provider)
        .then((data) => {

          console.log('Firebase data ', data)

          const profile: any = data.additionalUserInfo?.profile;
          const user: any = data.user;

          let access_token = '';

          if (type === 'google') {
            access_token = (data.credential as any).idToken;
          } else if (type === 'facebook') {
            access_token = (data.credential as any).accessToken;
          }

          this.back({
            provider: data.credential?.providerId,
            token: access_token,
            name: data.user?.displayName,
            uid: data.user?.uid,
            email: profile.email,
          }).subscribe({
            next: (value: any) => {
              console.log(value.access_token as string)
              console.log(value.account as IAccount)

              localStorage.setItem('@access_token', value.access_token)

              sessionStorage.setItem('@account_data', JSON.stringify(value.account as IAccount))

              callback()
            },
            error: (error) => {
              this.errorService.setError({
                name: error.message,
                statusCode: error.statusCode
              })
            }
          })
        })
      .catch((error) => console.log(error))
    } else {
      console.log(data)
      this.back({
        provider: 'credentials',
        ...data,
      }).subscribe({
        next: (value: any) => {
          localStorage.setItem('@access_token', value.access_token)

          sessionStorage.setItem('@account_data', JSON.stringify(value.account))

          callback()
        },
        error: (error) => {
          this.errorService.setError({
            name: error.message,
            statusCode: error.statusCode
          })
        }
      })
    }
  }

  private back(data?: any) {
    return this.httpClient.post(`${environment.api}/account/login`, data)
      .pipe(
        catchError(this.handleError),
      )
  }

  private handleError(error: HttpErrorResponse) {

    const errorResponse = {
      message: error.error.message,
      statusCode: error.error.statusCode,
      timestamp: error.error.timestamp,
      errors: error.error.messages ?? [],
      realStatusCode: error.status,
    }

    return throwError(() => errorResponse);
  }

  retrieveToken(): string | null {
    return localStorage.getItem('@access_token')
  }

  persist(key: string, value: any) {
    if (value !== null && value !== undefined) {
      localStorage.setItem(key, value);
    }
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('@access_token') ? true :false;
  }

  logOut() {
    localStorage.removeItem('@access_token');

    sessionStorage.removeItem('@account_data');
  }
}
