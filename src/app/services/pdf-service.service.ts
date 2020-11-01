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

  generatePDF(data) {
    const callable = this.functions.httpsCallable('generatePDF');

    // Create an Observable and pass any data you want to the function
    // const obs = callable({ coolMsg: this.myInput });
    const obs = callable({
      initiative: {
        sub: '0xc9417d602B67b7c29545d4c961Dc0a7a6F0b9844',
        vorname: data.name,
        nachname: data.surname,
        birthday: data.birthday,
        adress: 'Villenstrasse 4',
        datum: '12.12.2020',
        titel: 'Velorouten-Initiative',
        initiativtext: 'irgendwas',
        urheber: 'ich'
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
