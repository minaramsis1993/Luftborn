import { Component, inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ManageTask } from '../manage-task/manage-task';
@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  activeTab: 'dashboard' | 'tasks' = 'dashboard';
  dialog = inject(MatDialog);

  changeActiveTab(tab: 'dashboard' | 'tasks') {
    this.activeTab = tab;
  }

  createNewTask() {
    const dialogRef = this.dialog.open(ManageTask, {
      data: {
        isAdd: true,
      },
    });
  }
}
