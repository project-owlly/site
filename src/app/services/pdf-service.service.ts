import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  readonly url = 'http://localhost:5001/project-owlly/europe-west6/generatePDF';

  pdf: any;

  constructor(private http: HttpClient) { }

  generate(email: string, user: string){
    console.log(email, user);
    this.http.post<any>(this.url, {adress: email, vorname: name}).subscribe(data => {this.pdf = data.result})
  
  }
}
