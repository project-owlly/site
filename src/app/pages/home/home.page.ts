import {Component} from '@angular/core';

import {IonRouterOutlet, ModalController} from '@ionic/angular';

import {NewsletterPage} from '../newsletter/newsletter.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) {}

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: NewsletterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
  }

  doSomething() {
    console.log('Do something');
  }
}
