import {Injectable} from '@angular/core';

import {AngularFireFunctions} from '@angular/fire/functions';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Owlly, OwllyData} from '../types/owlly';

@Injectable({
  providedIn: 'root',
})
export class OwllyService {
  constructor(private firestore: AngularFirestore, private functions: AngularFireFunctions) {}

  callOwlly() {
    const callable = this.functions.httpsCallable('owlly');

    // Create an Observable and pass any data you want to the function
    // const obs = callable({ coolMsg: this.myInput });
    const observer = callable({});
    observer.subscribe((data) => {
      console.log('OWLLY ' + JSON.stringify(data));
    });
    return observer;

    // TODO: bad practice, no subscribe in services or take care of detroying the subscription
    /*obs.subscribe(async (res) => {
      console.log(JSON.stringify(res));
    });*/
  }

  owlly(owllyId: string): Observable<Owlly | undefined> {
    const doc: AngularFirestoreDocument<OwllyData | undefined> = this.firestore.doc<OwllyData | undefined>(owllyId);

    return doc.valueChanges().pipe(
      map((data: OwllyData | undefined) => {
        return data
          ? {
              id: owllyId,
              ref: doc.ref,
              data,
            }
          : undefined;
      })
    );
  }
}
