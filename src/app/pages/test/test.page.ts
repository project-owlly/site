import {Component, OnInit} from '@angular/core';
import {PdfServiceService} from '../../services/pdf-service.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  
  testForm: FormGroup;

  constructor(
    private pdfService: PdfServiceService,
    public fb: FormBuilder,
    ) {}

  ngOnInit() {
    this.testForm = this.fb.group({
      title: ['', [Validators.required]],
      date: ['', [Validators.required]],
      iText: ['', [Validators.required]],
      urheber: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      adress: ['', [Validators.required]],
    });
  }

  async generatePDF() {
    let pdf = await this.pdfService.generatePDF(this.testForm.value);
    
  }
}
