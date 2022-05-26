import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InArrivoComponent } from './in-arrivo.component';

describe('InArrivoComponent', () => {
  let component: InArrivoComponent;
  let fixture: ComponentFixture<InArrivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InArrivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InArrivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
