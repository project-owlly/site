import {Component} from '@angular/core';

import {Observable} from 'rxjs';

import {Pdf} from '../../../types/pdf';

import {PdfService} from '../../../services/pdf.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage {
  pdf$: Observable<Pdf | undefined> = this.pdfService.pdf$;

  constructor(private pdfService: PdfService) {}

  openEID() {
    // TODO
    alert('Open EID');
  }
}
