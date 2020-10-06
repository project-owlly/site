import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OidcService} from 'src/app/services/oidc.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.page.html',
  styleUrls: ['./return.page.scss'],
})
export class ReturnPage implements OnInit {
  public return = '';
  public userData: any = {};
  constructor(private route: ActivatedRoute, private oidc: OidcService) {
    this.route.queryParams.subscribe(async (params) => {
      if (params && params.code) {
        this.return = params.code;

        this.oidc.getUserData(params.code).subscribe((userData) => {
          this.userData = JSON.stringify(userData.data);
        });
      }
    });
  }

  ngOnInit() {}
}
