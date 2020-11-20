import {Component, OnInit} from '@angular/core';

import {SwUpdate} from '@angular/service-worker';

import {first} from 'rxjs/operators';

import {Platform, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform, private swUpdate: SwUpdate, private toastController: ToastController) {}

  async ngOnInit() {
    await this.platform.ready();

    await this.checkSwUpdate();
  }

  private async checkSwUpdate() {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    this.swUpdate.available.pipe(first()).subscribe(async () => {
      const toast = await this.toastController.create({
        message: 'Eine neue Version ist verfügbar. Zum Aktualisieren neu laden.',
        buttons: [
          {
            text: 'Neu laden',
            icon: 'refresh-circle-outline',
            handler: () => {
              window.location.reload();
            },
          },
        ],
        position: 'top',
        color: 'primary',
      });

      await toast.present();
    });

    await this.swUpdate.checkForUpdate();
  }
}
