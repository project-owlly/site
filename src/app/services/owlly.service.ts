import {Injectable} from '@angular/core';

import {AngularFireFunctions} from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class OwllyService {
  constructor(private functions: AngularFireFunctions) {}
  callOwlly() {
    const callable = this.functions.httpsCallable('owlly');

    // Create an Observable and pass any data you want to the function
    // const obs = callable({ coolMsg: this.myInput });
    const obs = callable({});

    // TODO: bad practice, no subscribe in services or take care of detroying the subscription
    obs.subscribe(async (res) => {
      console.log(JSON.stringify(res));
    });
  }
}
