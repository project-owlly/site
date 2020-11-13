import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';

import {Observable} from 'rxjs';
import {OidcState} from '../types/oidc';

@Injectable({
  providedIn: 'root',
})
export class EidGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const stateParam: string | null = next.queryParamMap.get('state'); // If provided = owllyId
    const code: string | null = next.queryParamMap.get('code');

    if (!stateParam) {
      return this.router.createUrlTree(['/']);
    }

    try {
      const oidcState: OidcState = JSON.parse(stateParam);

      return this.router.createUrlTree([oidcState.type === 'login' ? '/success' : '/pdf'], {
        queryParams: {
          code,
        },
      });
    } catch (err) {
      return this.router.createUrlTree(['/']);
    }
  }
}
