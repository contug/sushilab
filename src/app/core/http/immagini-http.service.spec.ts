import { TestBed } from '@angular/core/testing';

import { ImmaginiHttpService } from './immagini-http.service';

describe('ImmaginiHttpService', () => {
  let service: ImmaginiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImmaginiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
