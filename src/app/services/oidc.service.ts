import {Injectable} from '@angular/core';
import {AngularFireFunctions} from '@angular/fire/functions';

import {Observable} from 'rxjs';

import {OidAuth, OidAuthDataRequest} from '../types/oidc';

@Injectable({
  providedIn: 'root',
})
export class OidcService {
  constructor(private functions: AngularFireFunctions) {}

  getAuthUrl(owllyId: string): Observable<OidAuth> {
    const callable: (data: OidAuthDataRequest) => Observable<OidAuth> = this.functions.httpsCallable<OidAuthDataRequest, OidAuth>('OIDAuthUrl');
    return callable({state: owllyId} as OidAuthDataRequest);
  }

  getUserData(token) {
    const callable = this.functions.httpsCallable('eidData');
    const obs = callable({authorization_code: token});
    return obs;
  }
}
