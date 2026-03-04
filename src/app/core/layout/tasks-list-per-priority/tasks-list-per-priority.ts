import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list-per-priority',
  imports: [NgClass],
  standalone: true,
  templateUrl: './tasks-list-per-priority.html',
  styleUrl: './tasks-list-per-priority.scss',
})
export class TasksListPerPriority { }
