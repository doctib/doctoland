import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetOverviewSocialMediaComponent } from './bottom-sheet-overview-social-media.component';

describe('BottomSheetOverviewSocialMediaComponent', () => {
  let component: BottomSheetOverviewSocialMediaComponent;
  let fixture: ComponentFixture<BottomSheetOverviewSocialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetOverviewSocialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetOverviewSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
