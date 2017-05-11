import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillListingComponent } from './skill-listing.component';

describe('SkillListingComponent', () => {
  let component: SkillListingComponent;
  let fixture: ComponentFixture<SkillListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
