import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SigninModule } from './views/signin/signin.module';
import {LOCALE_ID, DEFAULT_CURRENCY_CODE, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";

import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { CartModule } from './views/cart/cart.module';
import { RouterModule, Routes } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app'

import { FIREBASE_OPTIONS } from '@angular/fire/compat'

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { FaqModule } from './views/faq/faq.module';
import { NgxMaskModule } from 'ngx-mask';
import { AuthenticationInterceptor } from './shared/interceptors/authentication-interceptor.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


registerLocaleData(ptBr);



@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [

    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyChr-3nCEoMJRwPRLnV_cP9Wzp16HVEuHE",
      authDomain: "appexalla-ca24f.firebaseapp.com",
      databaseURL: "https://appexalla-ca24f.firebaseio.com",
      projectId: "appexalla-ca24f",
      storageBucket: "appexalla-ca24f.appspot.com",
      messagingSenderId: "547935807542",
      appId: "1:547935807542:web:3decf645ba401bda0b1097",
      measurementId: "G-7Y5YJFR6KN"
    })),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CartModule,
    FaqModule,
    SigninModule,
    NgxMaskModule.forRoot(),
    InfiniteScrollModule,
    NgxSpinnerModule.forRoot({type : 'ball-scale-multiple' }),
    BrowserAnimationsModule,





  ],

  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: FIREBASE_OPTIONS, useValue:{
      apiKey: 'AIzaSyAML-J5elfyeLBMVE2kcfIm49Bv84fduno',
      authDomain: 'projeto-exalla.firebaseapp.com',
      projectId: '737097222918',
      messagingSenderId: '123'
    }  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
