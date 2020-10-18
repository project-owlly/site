import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { FormGroup,FormBuilder, Validators,ReactiveFormsModule } from "@angular/forms";
import { NewsletterService } from "../../services/data/newsletter.service";
import { ToastController } from "@ionic/angular";
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

  constructor(private modalCtrl: ModalController, private newsletterService: NewsletterService, public fb: FormBuilder, public toastcontroller: ToastController) { }
  
  async close() {
    await this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.newsletterForm = this.fb.group({
      vorname: ['', [Validators.required]],
      nachname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      funnel: [''],
      testuser: ''
    })
  }
  createRecord() {
    console.log(this.newsletterForm.value);
    this.newsletterService.create_nlUser(this.newsletterForm.value)
    .then(() => {
      this.toastcontroller.create({
        message: 'Email erfolgreich erfasst.',
        color: 'primary',
        duration: 4000,
        position: 'bottom',
        animated: true,
        header: 'Newsletter Anmeldung:'
      }).then(toast => {
        toast.present();
        this.modalCtrl.dismiss();
      });
    }
    ,error => {
      console.log(error);
      this.toastcontroller.create({
        message: 'Fehler',
        color: 'danger',
        duration: 4000
      }).then(toast => {
        toast.present()
      })
    })
  }
}
