import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTeamViewComponent } from './match-team-view.component';

describe('MatchTeamViewComponent', () => {
  let component: MatchTeamViewComponent;
  let fixture: ComponentFixture<MatchTeamViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchTeamViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTeamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
