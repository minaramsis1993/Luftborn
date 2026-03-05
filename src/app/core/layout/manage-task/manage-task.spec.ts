import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTask } from './manage-task';

describe('ManageTask', () => {
  let component: ManageTask;
  let fixture: ComponentFixture<ManageTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTask],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
