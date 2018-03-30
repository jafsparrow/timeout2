import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnSummaryComponent } from './ann-summary.component';

describe('AnnSummaryComponent', () => {
  let component: AnnSummaryComponent;
  let fixture: ComponentFixture<AnnSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
