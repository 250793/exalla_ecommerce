import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SocialLoginService } from '../../shared/services/social-login.service';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  formConta!: FormGroup

  constructor(
    private location: Location,
    private spinner: NgxSpinnerService,
    private SocialLoginService: SocialLoginService,
    private fb: FormBuilder
  ) {
    this.formConta = new FormGroup({
      phone: new FormControl(''),
      email: new FormControl(''),
      name:  new FormControl(''),
      cpf_cnpj:  new FormControl('')
    })
  }

  ngOnInit(): void {

    this.formConta = this.fb.group({
      phone: [''],
      email: [''],
      name:  [''],
      cpf_cnpj:['']


    })

  }
  voltar() {
    this.location.back()
    this.spinner.show()
    this.spinner.hide()

  }
  conta() {
    console.log('deu certo');

  }
}
