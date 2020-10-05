import {Injectable} from '@angular/core';

import {AngularFireFunctions} from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class OidcService {
  constructor(private functions: AngularFireFunctions) {}

  getAuthUrl() {
    const callable = this.functions.httpsCallable('OIDAuthUrl');
    const obs = callable({});
    return obs;
  }
}
