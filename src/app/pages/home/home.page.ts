import {Component} from '@angular/core';

import {IonRouterOutlet, ModalController} from '@ionic/angular';

import {FeedbackPage} from '../feedback/feedback.page';
import {NewsletterPage} from '../newsletter/newsletter.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) {}

  async showNewsletter() {
    const modal = await this.modalCtrl.create({
      component: NewsletterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
  }

  async showFeedback() {
    const modal = await this.modalCtrl.create({
      component: FeedbackPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
  }
}
