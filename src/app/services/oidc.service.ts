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
  getAuthUrlLogin(): Observable<OidAuth> {
    const callable: (data: OidAuthDataRequest) => Observable<OidAuth> = this.functions.httpsCallable<OidAuthDataRequest, OidAuth>('OIDAuthUrlLogin');
    return callable({state: 'login'} as OidAuthDataRequest);
  }

  getEidLogin(token): Observable<OidAuth> {
    const callable: (data: any) => Observable<OidAuth> = this.functions.httpsCallable<OidAuthDataRequest, OidAuth>('eidLogin');
    return callable({authorization_code: token});
  }

  getUserData(token) {
    const callable = this.functions.httpsCallable('eidData');
    return callable({authorization_code: token});
  }
}
