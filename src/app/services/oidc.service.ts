import {Injectable} from '@angular/core';
import {AngularFireFunctions} from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class OidcService {
  constructor(private functions: AngularFireFunctions) {}

  getAuthUrl(state) {
    const callable = this.functions.httpsCallable('OIDAuthUrl');
    const obs = callable({state: state});
    return obs;
  }

  getUserData(token) {
    const callable = this.functions.httpsCallable('eidData');
    const obs = callable({authorization_code: token});
    return obs;
  }
}
