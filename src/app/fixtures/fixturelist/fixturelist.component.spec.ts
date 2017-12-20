import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturelistComponent } from './fixturelist.component';

describe('FixturelistComponent', () => {
  let component: FixturelistComponent;
  let fixture: ComponentFixture<FixturelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
