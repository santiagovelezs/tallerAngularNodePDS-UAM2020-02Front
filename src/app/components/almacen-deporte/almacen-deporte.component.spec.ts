import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenDeporteComponent } from './almacen-deporte.component';

describe('AlmacenDeporteComponent', () => {
  let component: AlmacenDeporteComponent;
  let fixture: ComponentFixture<AlmacenDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmacenDeporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
