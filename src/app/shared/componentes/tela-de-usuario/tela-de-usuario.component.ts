import { Component, OnInit } from '@angular/core';
import { SocialLoginService } from '../../services/social-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-de-usuario',
  templateUrl: './tela-de-usuario.component.html',
  styleUrls: ['./tela-de-usuario.component.scss']
})
export class TelaDeUsuarioComponent implements OnInit {


  accountData?:any;
  constructor(
    public socialLoginService: SocialLoginService,
    private router :Router

  ) { }

  ngOnInit(): void {

  }

  logOut() {
    this.socialLoginService.logOut();
    this.router.navigate(['']).then(() => location.reload())
  }
}
