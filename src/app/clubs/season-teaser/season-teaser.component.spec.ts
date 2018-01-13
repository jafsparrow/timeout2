import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonTeaserComponent } from './season-teaser.component';

describe('SeasonTeaserComponent', () => {
  let component: SeasonTeaserComponent;
  let fixture: ComponentFixture<SeasonTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
