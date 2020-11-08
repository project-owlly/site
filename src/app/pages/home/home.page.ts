import {Component} from '@angular/core';

import {IonRouterOutlet, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) {}

  async showNewsletter() {
    const {NewsletterPage} = await import('../../modals/newsletter/newsletter.page');

    const modal = await this.modalCtrl.create({
      component: NewsletterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
  }

  async showFeedback() {
    const {FeedbackPage} = await import('../../modals/feedback/feedback.page');

    const modal = await this.modalCtrl.create({
      component: FeedbackPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
  }
}
