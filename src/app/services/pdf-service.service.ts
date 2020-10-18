import {Injectable} from '@angular/core';
//import {HttpClient} from '@angular/common/http';

import {AngularFireFunctions} from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class PdfServiceService {
  //readonly url = 'http://localhost:5001/project-owlly/europe-west6/generatePDF';

  pdf: any;

  constructor(
    //private http: HttpClient,
    private functions: AngularFireFunctions
  ) {}

  generatePDF() {
    const callable = this.functions.httpsCallable('generatePDF');

    // Create an Observable and pass any data you want to the function
    // const obs = callable({ coolMsg: this.myInput });
    const obs = callable({
      user: {
        sub: '0xc9417d602B67b7c29545d4c961Dc0a7a6F0b9844',
        given_name: 'Sandro Bruno',
        family_name: 'Scalco',
        birth_date: '03.06.1988',
        locality: 'Schaffhausen',
        postal_code: '8200',
        canton: 'ZH',
        street_address: 'Villenstrasse 4',
        verified_simple: {
          given_name: true,
          family_name: true,
          birth_date: true,
          locality: false,
          postal_code: false,
          street_address: false,
        },
      },
      owllyId: 'vrrYZoolx2XSy23RW63f',
    });
    // TODO: unsubscribe or first
    obs.subscribe((res) => {
      this.pdf = res.result;
    });
  }

  generateHttp(email: string, user: string) {
    console.log(email, user);
    // TODO: unsubscribe or first
    /*this.http
      .post<any>(this.url, {
        adress: email,
        vorname: name,
      })
      .subscribe((data) => {
        this.pdf = data.result;
      });
      */
  }
}
