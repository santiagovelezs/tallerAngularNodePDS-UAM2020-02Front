import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMultComponent } from './tabla-mult.component';

describe('TablaMultComponent', () => {
  let component: TablaMultComponent;
  let fixture: ComponentFixture<TablaMultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
