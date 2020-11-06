import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StartGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Technically we would be able to check here if the owllyId exists in DB and if not point to home or somewhere else.
    if (!next.params.owllyId || next.params.owllyId === '') {
      return this.router.parseUrl('/');
    } else {
      return true;
    }
  }
}
