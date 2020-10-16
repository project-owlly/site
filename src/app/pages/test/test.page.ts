import {Component, OnInit} from '@angular/core';
import {PdfServiceService} from 'src/app/services/pdf-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  constructor(private pdfService: PdfServiceService) {}

  ngOnInit() {}

  async generatePDF() {
    let pdf = await this.pdfService.generatePDF();
  }
}
