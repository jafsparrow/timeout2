import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslitComponent } from './newslit.component';

describe('NewslitComponent', () => {
  let component: NewslitComponent;
  let fixture: ComponentFixture<NewslitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
