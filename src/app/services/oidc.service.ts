import {Injectable} from '@angular/core';
import {AngularFireFunctions} from '@angular/fire/functions';

import {Observable} from 'rxjs';

import {OidAuth, OidAuthDataRequest, OidAuthLoginDataRequest} from '../types/oidc';
import {EidDataRequest, EidUserData} from '../types/eid';

@Injectable({
  providedIn: 'root',
})
export class OidcService {
  constructor(private functions: AngularFireFunctions) {}

  getAuthUrl(owllyId: string): Observable<OidAuth | undefined> {
    const callable: (data: OidAuthDataRequest) => Observable<OidAuth | undefined> = this.functions.httpsCallable<OidAuthDataRequest, OidAuth | undefined>(
      'OIDAuthUrl'
    );
    return callable({owllyId} as OidAuthDataRequest);
  }

  getAuthUrlLogin(): Observable<OidAuth | undefined> {
    const callable: (data: OidAuthLoginDataRequest) => Observable<OidAuth | undefined> = this.functions.httpsCallable<OidAuthDataRequest, OidAuth | undefined>(
      'OIDAuthUrlLogin'
    );
    return callable({});
  }

  getEidLogin(token: string): Observable<string | undefined> {
    const callable: (data: EidDataRequest) => Observable<string | undefined> = this.functions.httpsCallable<EidDataRequest, string | undefined>('eidLogin');
    return callable({authorization_code: token} as EidDataRequest);
  }

  getEidUserData(token: string): Observable<EidUserData | undefined> {
    const callable: (data: EidDataRequest) => Observable<EidUserData | undefined> = this.functions.httpsCallable<EidDataRequest, EidUserData | undefined>(
      'eidData'
    );
    return callable({authorization_code: token} as EidDataRequest);
  }
}
