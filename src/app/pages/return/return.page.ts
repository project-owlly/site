import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {OidcService} from 'src/app/services/oidc.service';
import {PdfServiceService} from 'src/app/services/pdf-service.service';
import {filter, first, map, shareReplay, switchMap} from 'rxjs/operators';

import {Plugins, FilesystemDirectory, FilesystemEncoding} from '@capacitor/core';
import {AuthService} from 'src/app/services/auth.service';
const {Filesystem, Browser} = Plugins;

@Component({
  selector: 'app-return',
  templateUrl: './return.page.html',
  styleUrls: ['./return.page.scss'],
})
export class ReturnPage implements OnInit {
  public code: string = '';
  public state: string = '';
  public userData: any = {};
  public pdfGenerated: boolean = false;
  constructor(private route: ActivatedRoute, private oidc: OidcService, private pdfService: PdfServiceService, private auth: AuthService) {
    //todo: start spinner

    this.route.queryParams.subscribe(async (params) => {
      if (params && params.code && params.state) {
        this.code = params.code;
        this.state = params.state;

        if (params.state !== 'login') {
          this.oidc.getUserData(params.code).subscribe((userData) => {
            //console.log(JSON.stringify(userData));
            this.userData = userData;

            this.pdfService.generatePDF({userData: userData, owllyId: params.state}).subscribe(async (data) => {
              //console.log(data);

              Browser.open({url: data.url}).then((done) => {});

              //this.fileWrite(data, userData.sub + '-' + params.state + '.pdf');
            });
          });
        } else {
          let token = await this.oidc.getEidLogin().pipe(first()).toPromise();
          //Login ->
          this.auth.login(token).then((user) => {
            console.log(user);
          });
        }
      } else {
        // todo: terminate spinner:
      }
    });
  }

  ngOnInit() {}

  async fileWrite(data, filename) {
    try {
      const result = await Filesystem.writeFile({
        path: 'owlly/' + filename,
        data: data,
        directory: FilesystemDirectory.Documents,
        encoding: FilesystemEncoding.UTF8,
      });
      console.log('Wrote file', result);
    } catch (e) {
      console.error('Unable to write file', e);
    }
  }

  async fileRead(filename) {
    let contents = await Filesystem.readFile({
      path: 'owlly/' + filename,
      directory: FilesystemDirectory.Documents,
      encoding: FilesystemEncoding.UTF8,
    });
    console.log(contents);
  }
}
