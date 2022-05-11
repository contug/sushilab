import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneTavoloComponent } from './gestione-tavolo.component';

describe('GestioneTavoloComponent', () => {
  let component: GestioneTavoloComponent;
  let fixture: ComponentFixture<GestioneTavoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneTavoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneTavoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
