import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { FormGroup,FormBuilder, Validators,ReactiveFormsModule } from "@angular/forms";
import { NewsletterService } from "../../services/data/newsletter.service";

interface userData {
  Name: string;
  Email: string;
  Funnel: string;
}

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {
  
  newsletterForm: FormGroup;

  constructor(private modalCtrl: ModalController, private newsletterService: NewsletterService, public fb: FormBuilder) { }
  
  async close() {
    await this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.newsletterForm = this.fb.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Funnel: ['']
    })
  }
  createRecord() {
    console.log(this.newsletterForm.value);
    this.newsletterService.joinNewsletter(this.newsletterForm.value)
    .catch(error => {
      console.log(error);
    })
  }
}
