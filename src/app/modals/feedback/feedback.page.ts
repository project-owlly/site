import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ToastController} from '@ionic/angular';
import {NewsletterService} from '../../services/data/newsletter/newsletter.service';

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
      email: ['', [Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]],
      funnel: [''],
    });
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  async createRecord() {
    try {
      await this.newsletterService.createFeedbackRecord(this.feedbackForm.value);

      const toast: HTMLIonToastElement = await this.toastcontroller.create({
        message: 'Dein Feedback wurde erfolgreich erfasst.',
        color: 'success',
        duration: 4000,
        position: 'bottom',
        animated: true,
        header: 'Vielen Dank!',
      });

      await toast.present();
      await this.modalCtrl.dismiss();
    } catch (err) {
      const toast: HTMLIonToastElement = await this.toastcontroller.create({
        message: 'Fehler: ' + err.text,
        color: 'danger',
        duration: 4000,
      });

      await toast.present();
    }
  }
}
