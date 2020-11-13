import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EidGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const stateParam: string | null = next.paramMap.get('state'); // If provided = owllyId
    const code: string | null = next.paramMap.get('code');

    return this.router.createUrlTree([!stateParam ? '/login' : '/pdf'], {
      queryParams: {
        code,
      },
    });
  }
}
