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

  initiative = 'Veloinitiative';
  initiativText =
    'Cillum ut ea aliqua id laboris ad ullamco nisi enim magna. Id ad cupidatat laborum officia veniam cillum cillum aliqua tempor commodo sunt. Minim in officia labore magna officia et dolor in velit sunt ea nostrud consectetur.';

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
}
