import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuoiOrdiniComponent } from './tuoi-ordini.component';

describe('TuoiOrdiniComponent', () => {
  let component: TuoiOrdiniComponent;
  let fixture: ComponentFixture<TuoiOrdiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuoiOrdiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuoiOrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
