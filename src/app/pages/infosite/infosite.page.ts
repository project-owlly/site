import {Component, OnInit} from '@angular/core';
import {OidcService} from 'src/app/services/oidc.service';
import {PdfServiceService} from 'src/app/services/pdf-service.service';
import {Plugins} from '@capacitor/core';

const {Browser} = Plugins;

@Component({
  selector: 'app-infosite',
  templateUrl: './infosite.page.html',
  styleUrls: ['./infosite.page.scss'],
})
export class InfositePage implements OnInit {
  user: any = {};

  initiativData = {
    initiative: 'Veloinitiative',
    initiativText:
    'Cillum ut ea aliqua id laboris ad ullamco nisi enim magna. Id ad cupidatat laborum officia veniam cillum cillum aliqua tempor commodo sunt. Minim in officia labore magna officia et dolor in velit sunt ea nostrud consectetur.',
    urheber: 'Max Mustermann ist der Urheber. Villenstrasse 4, 8200 Schaffhausen, Cillum ut ea aliqua id laboris ad ullamco nisi enim magna. Id ad cupidatat laborum officia veniam cillum cillum aliqua tempor commodo sunt. Minim in officia',
    logo: 'https://www.jfsh.ch/wp-content/uploads/cropped-Webp.net-resizeimage.jpg',
    kanton: 'Schaffhausen',
    ziele: ['Velounfälle verhindern', 'Schluss mit Stillstand', 'Sicherheit auf dem Velo und zu Fuss', 'Beitrag zum Klimaschutz']
  };

  pdfData;

  constructor(private pdfService: PdfServiceService, private oidcService: OidcService) {}

  ngOnInit() {}

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
    this.pdfService.generate(this.user.email, this.user.name);
  }

  trimString(string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  }

  showMore = false;
  showMoreU = false;
}
