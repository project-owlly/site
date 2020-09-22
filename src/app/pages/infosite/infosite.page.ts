import { Component, OnInit } from '@angular/core';
import { PdfServiceService } from 'src/app/services/pdf-service.service';

@Component({
  selector: 'app-infosite',
  templateUrl: './infosite.page.html',
  styleUrls: ['./infosite.page.scss'],
})
export class InfositePage implements OnInit {

  user: any = {};

  initiative: string = "Veloinitiative";
  initiativText: string = "Cillum ut ea aliqua id laboris ad ullamco nisi enim magna. Id ad cupidatat laborum officia veniam cillum cillum aliqua tempor commodo sunt. Minim in officia labore magna officia et dolor in velit sunt ea nostrud consectetur.";

  pdfData;

  constructor(private pdfService: PdfServiceService) { }

  ngOnInit() {
  }


  submit(){
    console.log(this.user);
    this.pdfService.generate(this.user.email, this.user.name);
  }

  

}
