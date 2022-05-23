import { TestBed } from '@angular/core/testing';

import { MenuHttpService } from './menu-http.service';

describe('MenuService', () => {
  let service: MenuHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
