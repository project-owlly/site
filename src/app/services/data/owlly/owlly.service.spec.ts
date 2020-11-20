import {TestBed} from '@angular/core/testing';

import {OwllyService} from './owlly.service';

describe('OwllyService', () => {
  let service: OwllyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwllyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
