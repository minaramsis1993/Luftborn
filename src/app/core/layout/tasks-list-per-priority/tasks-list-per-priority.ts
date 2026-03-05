import { NgClass } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { FilterType } from '../filters-bar/filters-bar';
import { TaskStatusEnum } from '../../models/models';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { ManageTask } from '../manage-task/manage-task';


@Component({
  selector: 'app-tasks-list-per-priority',
  imports: [NgClass, MatMenuModule],
  standalone: true,
  templateUrl: './tasks-list-per-priority.html',
  styleUrl: './tasks-list-per-priority.scss',
})
export class TasksListPerPriority {
  tasksType = input.required<TaskStatusEnum>();
  tasksTotal = input.required<number>();
  tasks = input.required<any[]>();
  onDelete = output<string>();
  dialog = inject(MatDialog);

  onDeleteTask(taskId: string) {
    this.onDelete.emit(taskId);
  }

  onEditTask(taskId: string) {
    const foundTask = this.tasks().find(task => task.id === taskId);
    const dialogRef = this.dialog.open(ManageTask, {
      data: {
        isAdd: false,
        task: foundTask,
      },
    });
  }
}
