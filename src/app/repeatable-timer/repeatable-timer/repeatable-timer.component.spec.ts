import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatableTimerComponent } from './repeatable-timer.component';

describe('RepeatableTimerComponent', () => {
  let component: RepeatableTimerComponent;
  let fixture: ComponentFixture<RepeatableTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatableTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatableTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
