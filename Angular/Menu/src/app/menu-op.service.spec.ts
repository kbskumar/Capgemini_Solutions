import { TestBed } from '@angular/core/testing';

import { MenuOPService } from './menu-op.service';

describe('MenuOPService', () => {
  let service: MenuOPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuOPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
