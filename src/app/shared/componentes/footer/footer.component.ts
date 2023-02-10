import { Component, OnInit } from '@angular/core';
import { SocialLoginService } from '../../services/social-login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private SocialLoginService: SocialLoginService
  ) { }

  ngOnInit(): void {
  }

  signIn(type: 'google' | 'facebook') {
    this.SocialLoginService.signIn(type)
  }
}
