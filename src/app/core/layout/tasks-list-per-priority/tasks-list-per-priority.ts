import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { FilterType } from '../filters-bar/filters-bar';
import { TaskStatusEnum } from '../../models/models';

@Component({
  selector: 'app-tasks-list-per-priority',
  imports: [NgClass],
  standalone: true,
  templateUrl: './tasks-list-per-priority.html',
  styleUrl: './tasks-list-per-priority.scss',
})
export class TasksListPerPriority {
  tasksType = input.required<TaskStatusEnum>();
  tasksTotal = input.required<number>();
  tasks = input.required<any[]>();
}
