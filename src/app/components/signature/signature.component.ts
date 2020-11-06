import {Component, Input} from '@angular/core';

import {EMPTY} from 'rxjs';
import {catchError, filter, first, tap} from 'rxjs/operators';

import {OidAuth} from '../../types/oidc';

import {OidcService} from '../../services/oidc.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
})
export class SignatureComponent {
  @Input() owllyId: string;

  inProgress = false;

  constructor(private oidcService: OidcService) {}

  sign() {
    this.oidcService
      .getAuthUrl(this.owllyId)
      .pipe(
        tap(() => (this.inProgress = true)),
        filter((auth: OidAuth | undefined) => auth !== undefined),
        first(),
        catchError((err) => {
          // TODO display an error to user?
          console.error(err);
          return EMPTY;
        })
      )
      .subscribe((auth: OidAuth) => {
        window.location.href = auth.url;

        this.inProgress = false;
      });
  }
}
