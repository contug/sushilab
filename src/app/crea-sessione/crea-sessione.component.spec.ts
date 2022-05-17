import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaSessioneComponent } from './crea-sessione.component';

describe('CreaSessioneComponent', () => {
  let component: CreaSessioneComponent;
  let fixture: ComponentFixture<CreaSessioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaSessioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaSessioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
