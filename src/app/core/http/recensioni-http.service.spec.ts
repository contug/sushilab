import { TestBed } from '@angular/core/testing';

import { RecensioniHttpService } from './recensioni-http.service';

describe('RecensioniHttpService', () => {
  let service: RecensioniHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecensioniHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
