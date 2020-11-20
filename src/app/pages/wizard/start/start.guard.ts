import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';

import {Observable} from 'rxjs';

import {OwllyService} from 'src/app/services/owlly.service';

@Injectable({
  providedIn: 'root',
})
export class StartGuard implements CanActivate {
  constructor(private router: Router, private owlly: OwllyService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Technically we would be able to check here if the owllyId exists in DB and if not point to home or somewhere else.
    // TODO: but should we do that? For performance and cost reason I would say no, at least not yet.
    if (!next.params.owllyId || next.params.owllyId === '') {
      return this.router.parseUrl('/');
    } else {
      return true;
    }
  }
}
