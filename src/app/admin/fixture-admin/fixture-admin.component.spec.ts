import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureAdminComponent } from './fixture-admin.component';

describe('FixtureAdminComponent', () => {
  let component: FixtureAdminComponent;
  let fixture: ComponentFixture<FixtureAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
