import {TestBed} from '@angular/core/testing';

import {StartGuard} from './start.guard';

describe('StartGuard', () => {
  let guard: StartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
