import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { handle } from 'src/app/shared/utils/cpf-validator-validator';
import {Router} from '@angular/router'
import { validarEmail } from 'src/app/shared/utils/email-validator-validator ';
import { SocialLoginService } from '../../shared/services/social-login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formSignup!: FormGroup

  constructor(
    private SocialLoginService: SocialLoginService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.formSignup = new FormGroup({
      name: new FormControl(''),
      cpf_cnpj: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmar: new FormControl(''),
      genero: new FormControl(''),

    })
   }

  ngOnInit(): void {
    this.formSignup = this.fb.group({
      name: ['', Validators.required],
      cpf_cnpj: ['', handle()],
      phone: [''],
      email: ['',[Validators.required,Validators.email,validarEmail()]],
      password: ['',Validators.required],
      confirmar: ['',Validators.required],
      genero: ['',Validators.required],

    }, { updateOn: 'blur' })
  }


  signIn(type: 'google'| 'facebook') {
    this.SocialLoginService.signIn(type, this.formSignup.value,() => {
      this.router.navigate(['']).then(() => location.reload())
    });
  }


  signUp() {
    this.SocialLoginService.signUp(this.formSignup.value,() => {
      this.router.navigate(['']).then(() => location.reload())
    });

}

}
