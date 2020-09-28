import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AngularFireFunctions} from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class PdfServiceService {
  readonly url = 'http://localhost:5001/project-owlly/europe-west6/generatePDF';

  pdf: any;

  constructor(private http: HttpClient, private functions: AngularFireFunctions) {}

  generate(email: string, user: string) {
    const callable = this.functions.httpsCallable('generatePDF');

    // Create an Observable and pass any data you want to the function
    // const obs = callable({ coolMsg: this.myInput });
    const obs = callable({
      adress: email,
      vorname: name,
    });

    // TODO: unsubscribe or first
    obs.subscribe(async (res) => {
      this.pdf = res.result;
    });
  }

  generateHttp(email: string, user: string) {
    console.log(email, user);
    // TODO: unsubscribe or first
    this.http
      .post<any>(this.url, {
        adress: email,
        vorname: name,
      })
      .subscribe((data) => {
        this.pdf = data.result;
      });
  }
}
