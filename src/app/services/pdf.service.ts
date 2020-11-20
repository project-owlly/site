import {Injectable} from '@angular/core';

import {AngularFireFunctions} from '@angular/fire/functions';

import {BehaviorSubject, Observable} from 'rxjs';

import {Pdf} from '../types/pdf';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  private readonly pdfSubject: BehaviorSubject<Pdf | undefined> = new BehaviorSubject<Pdf>(undefined);

  pdf$: Observable<Pdf> = this.pdfSubject.asObservable();

  constructor(private functions: AngularFireFunctions) {}

  generatePDF(data): Observable<Pdf> {
    const callable = this.functions.httpsCallable('generatePDF');
    return callable(data);
  }

  next(pdf: Pdf | undefined) {
    this.pdfSubject.next(pdf);
  }
}
