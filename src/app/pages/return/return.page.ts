import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {OidcService} from 'src/app/services/oidc.service';
import {PdfServiceService} from 'src/app/services/pdf-service.service';
import {filter, first, map, shareReplay, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-return',
  templateUrl: './return.page.html',
  styleUrls: ['./return.page.scss'],
})
export class ReturnPage implements OnInit {
  public code: string = '';
  public state: string = '';
  public userData: any = {};
  constructor(private route: ActivatedRoute, private oidc: OidcService, private pdfService: PdfServiceService) {
    //todo: start spinner

    this.route.queryParams.subscribe(async (params) => {
      if (params && params.code) {
        this.code = params.code;
        this.state = params.state;

        this.oidc.getUserData(params.code).subscribe((userData) => {
          console.log(JSON.stringify(userData));
          this.userData = userData;

          this.pdfService.generatePDF({userData: userData.user, owllyId: params.state}).subscribe((data) => {
            console.log(data);
          });
        });
      } else {
        // todo: terminate spinner:
      }
    });
  }

  ngOnInit() {}
}
