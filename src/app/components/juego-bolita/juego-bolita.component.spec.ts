import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoBolitaComponent } from './juego-bolita.component';

describe('JuegoBolitaComponent', () => {
  let component: JuegoBolitaComponent;
  let fixture: ComponentFixture<JuegoBolitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoBolitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoBolitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
