import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-return',
  templateUrl: './return.page.html',
  styleUrls: ['./return.page.scss'],
})
export class ReturnPage implements OnInit {
  public return = "";
  constructor(public navParams: NavParams) { 

    this.return = this.navParams.get('code');
  }

  ngOnInit() {
  }

}
