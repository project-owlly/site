import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {OidcService} from '../../../services/oidc.service';
import {AuthService} from '../../../services/auth.service';
import {filter, first, map, switchMap} from 'rxjs/operators';

// TODO: Just a temporary dummy component to display a success login with eID. Ultimately shoudl be moved, renamed or deleted.

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  constructor(private route: ActivatedRoute, private oidcService: OidcService, private authService: AuthService) {}

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
          await this.authService.login(token);
        } catch (err) {
          console.error(err);
        }
      });
  }
}
