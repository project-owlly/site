import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pdftest',
  templateUrl: './pdftest.page.html',
  styleUrls: ['./pdftest.page.scss'],
})
export class PdftestPage implements OnInit {

  user: any = {};

  initiative: string = "Veloinitiative";
  initiativText: string = "Cillum ut ea aliqua id laboris ad ullamco nisi enim magna. Id ad cupidatat laborum officia veniam cillum cillum aliqua tempor commodo sunt. Minim in officia labore magna officia et dolor in velit sunt ea nostrud consectetur.";

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.user);
   
  }

  loadPdf() {
    
  }
}
