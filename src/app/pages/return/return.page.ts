import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-return',
  templateUrl: './return.page.html',
  styleUrls: ['./return.page.scss'],
})
export class ReturnPage implements OnInit {
  public return = '';
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(async (params) => {
      if (params && params.code) {
        this.return = params.code;
      }
    });
  }

  ngOnInit() {}
}
