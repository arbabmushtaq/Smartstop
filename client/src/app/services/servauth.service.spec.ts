import { TestBed, inject } from '@angular/core/testing';

import { ServauthService } from './servauth.service';

describe('ServauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServauthService]
    });
  });

  it('should be created', inject([ServauthService], (service: ServauthService) => {
    expect(service).toBeTruthy();
  }));
});
