import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerDescComponent } from './career-desc.component';

describe('CareerDescComponent', () => {
  let component: CareerDescComponent;
  let fixture: ComponentFixture<CareerDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
