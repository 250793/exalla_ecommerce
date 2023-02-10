import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { cpf, cnpj } from "cpf-cnpj-validator";
import { SocialLoginService } from '../../shared/services/social-login.service';
import { ErrorService } from '../../shared/services/error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

formSignin!: FormGroup;

  constructor(
    private SocialLoginService: SocialLoginService,
    private fb: FormBuilder,
    private router: Router,
    public errorService: ErrorService
  ) {

   }

  ngOnInit(): void {
    this.formSignin = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })

  }

  async signIn(type: 'google' | 'facebook' | 'credentials') {
    this.SocialLoginService.signIn(type, this.formSignin.value, () => {
      this.router.navigate(['']).then(() => location.reload())
    });
  }

  handleDismissError() {
    this.errorService.setError(undefined);
  }

  handleError(name: string | undefined) {
    if (name === undefined) {
      return;
    }

    switch (name) {
      case 'account/login.invalid-credentials': {
        return 'E-mail ou senha não encontrados.'
      }
      default: {
        return 'Ocorreu um erro inesperado, contate o administrador do sistema.'
      }
    }
  }

}
