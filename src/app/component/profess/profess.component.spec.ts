import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessComponent } from './profess.component';

describe('ProfessComponent', () => {
  let component: ProfessComponent;
  let fixture: ComponentFixture<ProfessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
