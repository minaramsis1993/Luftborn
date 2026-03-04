import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListPerPriority } from './tasks-list-per-priority';

describe('TasksListPerPriority', () => {
  let component: TasksListPerPriority;
  let fixture: ComponentFixture<TasksListPerPriority>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksListPerPriority],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksListPerPriority);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
