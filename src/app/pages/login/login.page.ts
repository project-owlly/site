import {Component, OnInit} from '@angular/core';
import {OidcService} from 'src/app/services/oidc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private oidc: OidcService) {}

  ngOnInit() {}

  async login() {
    let url = await this.oidc.getAuthUrl('login');
  }
}
