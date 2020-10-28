import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {ToastController} from '@ionic/angular';
import {NewsletterService} from '../../services/data/newsletter.service';

interface userData {
  Name: string;
  Email: string;
  Funnel: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  feedbackForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    public fb: FormBuilder,
    public toastcontroller: ToastController,
    private newsletterService: NewsletterService
  ) {}

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      vorname: ['', [Validators.required]],
      nachname: ['', [Validators.required]],
      email: ['', [Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])]],
      funnel: [''],
    });
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  createRecord() {
    //console.log(this.feedbackForm.value);
    this.newsletterService.createFeedbackRecord(this.feedbackForm.value).then(
      () => {
        this.toastcontroller
          .create({
            message: 'Dein Feedback wurde erfolgreich erfasst.',
            color: 'success',
            duration: 4000,
            position: 'bottom',
            animated: true,
            header: 'Vielen Dank!',
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
