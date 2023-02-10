import { TestBed } from '@angular/core/testing';

import { MeGuard } from './me.guard';

describe('MeGuard', () => {
  let guard: MeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
