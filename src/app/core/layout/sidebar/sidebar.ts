import { Component, inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ManageTask } from '../manage-task/manage-task';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks-service';
@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  activeTab: 'dashboard' | 'tasks' = 'dashboard';
  dialog = inject(MatDialog);
  router = inject(Router);
  tasksService = inject(TasksService);

  changeActiveTab(tab: 'dashboard' | 'tasks') {
    this.activeTab = tab;
    this.tasksService.activeTab.set(tab);
  }

  createNewTask() {
    const dialogRef = this.dialog.open(ManageTask, {
      data: {
        isAdd: true,
      },
    });
  }
}
