import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  async close() {
    await this.modalCtrl.dismiss();
  }
  ngOnInit() {}

}
