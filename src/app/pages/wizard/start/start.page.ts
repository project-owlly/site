import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {Observable} from 'rxjs';
import {filter, first, map, switchMap} from 'rxjs/operators';

import {Owlly} from '../../../types/owlly';

import {OwllyService} from '../../../services/owlly.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage {
  readonly owlly$: Observable<Owlly | undefined> = this.activatedRoute.paramMap.pipe(
    first(),
    map((snapshop: ParamMap) => snapshop.get('owllyId')),
    filter((owllyId: string | undefined) => owllyId && owllyId !== ''),
    switchMap((owllyId: string) => this.owllyService.owlly(owllyId)),
    first()
  );

  constructor(private activatedRoute: ActivatedRoute, private owllyService: OwllyService) {}
}
