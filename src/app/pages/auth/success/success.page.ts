import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {OidcService} from '../../../services/oidc.service';
import {AuthService} from '../../../services/auth.service';
import {filter, first, map, switchMap} from 'rxjs/operators';
import {AlertController} from '@ionic/angular';

// TODO: Just a temporary dummy component to display a success login with eID. Ultimately shoudl be moved, renamed or deleted.

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private oidcService: OidcService,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(
        first(),
        filter((params: Params) => params.code !== null),
        map((params: Params) => params.code),
        switchMap((code: string) => this.oidcService.getEidLogin(code)),
        first(),
        filter((token: string | undefined) => token !== undefined)
      )
      .subscribe(async (token: string) => {
        try {
          if (!token) {
            this.router.navigateByUrl('/');
          }

          const user: void | firebase.default.auth.UserCredential = await this.authService.login(token).catch(async (err) => {
            let alert = await this.alertCtrl.create({
              message: err.message,
            });
          });

          if (user) {
            this.router.navigateByUrl('admin/dashboard');
          } else {
            let alert = await this.alertCtrl.create({
              message: 'no user',
            });
            this.router.navigateByUrl('/');
          }
        } catch (err) {
          console.error(err);
        }
      });
  }
}
