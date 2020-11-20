import {ActivatedRoute, Params} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {combineLatest, Observable, of} from 'rxjs';
import {catchError, filter, first, map, shareReplay, switchMap} from 'rxjs/operators';

import {EidUserData} from '../../../types/eid';
import {Pdf} from '../../../types/pdf';

import {Plugins} from '@capacitor/core';
const {Browser} = Plugins;

import {OidcService} from 'src/app/services/oidc.service';
import {PdfService} from 'src/app/services/pdf.service';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.page.html',
  styleUrls: ['./pdf.page.scss'],
})
export class PdfPage implements OnInit {
  useData$: Observable<EidUserData | undefined> = this.route.queryParams.pipe(
    first(),
    filter((params: Params) => params.code !== null),
    map((params: Params) => params.code),
    switchMap((code: string) => this.oidcService.getEidUserData(code)),
    first(),
    shareReplay({bufferSize: 1, refCount: true})
  );

  pdf$: Observable<Pdf | undefined> = this.pdfService.pdf$;

  constructor(private route: ActivatedRoute, private oidcService: OidcService, private pdfService: PdfService, private auth: AuthService) {
    // TODO: start spinner
  }

  ngOnInit() {
    this.openPdf();

    this.loadPdf();
  }

  private openPdf() {
    this.pdf$
      .pipe(
        filter((pdf: Pdf | undefined) => pdf !== undefined && pdf.url !== undefined),
        first()
      )
      .subscribe(async (pdf: Pdf) => await Browser.open({url: pdf.url}));
  }

  private loadPdf() {
    combineLatest([
      this.route.queryParams.pipe(
        first(),
        filter((params: Params) => params.owllyId !== null),
        map((params: Params) => params.owllyId)
      ),
      this.useData$.pipe(filter((userData: EidUserData | undefined) => userData !== undefined)),
    ])
      .pipe(
        first(),
        switchMap(([owllyId, userData]: [string, EidUserData]) => this.pdfService.generatePDF({userData, owllyId})),
        catchError((err) => {
          console.error(err);
          return of({url: undefined} as Pdf);
        }),
        first()
      )
      .subscribe((pdf: Pdf) => {
        this.pdfService.next(pdf);
      });
  }

  // async fileWrite(data, filename) {
  //   try {
  //     const result = await Filesystem.writeFile({
  //       path: 'owlly/' + filename,
  //       data: data,
  //       directory: FilesystemDirectory.Documents,
  //       encoding: FilesystemEncoding.UTF8,
  //     });
  //     console.log('Wrote file', result);
  //   } catch (e) {
  //     console.error('Unable to write file', e);
  //   }
  // }
  //
  // async fileRead(filename) {
  //   let contents = await Filesystem.readFile({
  //     path: 'owlly/' + filename,
  //     directory: FilesystemDirectory.Documents,
  //     encoding: FilesystemEncoding.UTF8,
  //   });
  //   console.log(contents);
  // }
}
