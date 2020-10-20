import {Component, OnInit} from '@angular/core';
import {OidcService} from 'src/app/services/oidc.service';
import {PdfServiceService} from 'src/app/services/pdf-service.service';
import {Plugins} from '@capacitor/core';
import { HttpClient } from "@angular/common/http";

const {Browser} = Plugins;

@Component({
  selector: 'app-infosite',
  templateUrl: './infosite.page.html',
  styleUrls: ['./infosite.page.scss'],
})
export class InfositePage implements OnInit {

  user: any = {}

  initiativData: any = {};

  pdfData;

  constructor(private pdfService: PdfServiceService, private oidcService: OidcService, private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://europe-west6-project-owlly.cloudfunctions.net/owlly').subscribe((response) => {
      this.initiativData = response;
    });
    console.log(this.initiativData);
  }

  sign() {
    console.log('sign');

    this.oidcService.getAuthUrl().subscribe(
      (urlData) => {
        console.log(JSON.stringify(urlData));

        Browser.open({url: urlData.url});
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  submit() {
    console.log(this.user);
    this.pdfService.generatePDF();
  }

  trimString(string, length) {
    return string.length > length ? string.substring(0, length) + '...' : string;
  }

  showMore = false;
  showMoreU = false;
}
