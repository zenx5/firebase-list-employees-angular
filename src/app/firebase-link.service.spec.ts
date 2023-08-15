import { TestBed } from '@angular/core/testing';

import { FirebaseLinkService } from './firebase-link.service';

describe('FirebaseLinkService', () => {
  let service: FirebaseLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
