import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pdftest',
  templateUrl: './pdftest.page.html',
  styleUrls: ['./pdftest.page.scss'],
})
export class PdftestPage implements OnInit {

  user: any = {};

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.user);
   
  }

  loadPdf() {
    
  }
}
