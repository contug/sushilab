import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniscitiComponent } from './unisciti.component';

describe('UniscitiComponent', () => {
  let component: UniscitiComponent;
  let fixture: ComponentFixture<UniscitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniscitiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniscitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
