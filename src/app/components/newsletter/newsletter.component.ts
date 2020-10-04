import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";

import { FormGroup,FormBuilder, Validators,ReactiveFormsModule } from "@angular/forms";
import { NewsletterService } from "../../services/data/newsletter.service";


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {


  constructor(private modalCtrl: ModalController, private newsletterService: NewsletterService) { }
  async close() {
    await this.modalCtrl.dismiss();
  }
  ngOnInit() {
   
  }

}
