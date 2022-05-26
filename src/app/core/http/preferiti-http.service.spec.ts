import { TestBed } from '@angular/core/testing';

import { PreferitiHttpService } from './preferiti-http.service';

describe('PreferitiHttpService', () => {
  let service: PreferitiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferitiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
