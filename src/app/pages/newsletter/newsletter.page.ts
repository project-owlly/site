import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {NewsletterService} from '../../services/data/newsletter.service';
import {ToastController} from '@ionic/angular';
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

  constructor(
    private modalCtrl: ModalController,
    private newsletterService: NewsletterService,
    public fb: FormBuilder,
    public toastcontroller: ToastController
  ) {}

  async close() {
    await this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.newsletterForm = this.fb.group({
      vorname: ['', [Validators.required]],
      nachname: ['', [Validators.required]],
      email: ['', [Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])]],
      funnel: [''],
    });
  }
  createRecord() {
    //console.log(this.newsletterForm.value);
    this.newsletterService.createNewsletterRecord(this.newsletterForm.value).then(
      () => {
        this.toastcontroller
          .create({
            message: 'E-Mail-Adresse erfolgreich erfasst.',
            color: 'success',
            duration: 4000,
            position: 'bottom',
            animated: true,
            header: 'Newsletter Anmeldung:',
          })
          .then((toast) => {
            toast.present();
            this.modalCtrl.dismiss();
          });
      },
      (error) => {
        console.log(error);
        this.toastcontroller
          .create({
            message: 'Fehler: ' + error.text,
            color: 'danger',
            duration: 4000,
          })
          .then((toast) => {
            toast.present();
          });
      }
    );
  }
}
