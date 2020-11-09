import {Component, OnInit} from '@angular/core';
import {OidcService} from 'src/app/services/oidc.service';
import {Plugins} from '@capacitor/core';
const {Browser} = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private oidc: OidcService) {}

  ngOnInit() {}

  async login() {
    this.oidc.getAuthUrl('login').subscribe((data) => {
      console.log(data.url);
      Browser.open({
        url: data.url,
      });
    });
  }
}
