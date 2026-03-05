import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { StatCard } from '../../shared/ui/stat-card/stat-card';
import { FiltersBar, FilterType, PriorityType } from "../../core/layout/filters-bar/filters-bar";
import { TasksListPerPriority } from "../../core/layout/tasks-list-per-priority/tasks-list-per-priority";
import { statistics } from '../../json/stats.json'
import { Statistic, Task, TaskStatusEnum } from '../../core/models/models';
import { tasks } from '../../json/tasks.json';
@Component({
  standalone: true,
  imports: [StatCard, FiltersBar, TasksListPerPriority],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {
  TaskStatusEnum = TaskStatusEnum;
  stats = signal<Statistic[]>(statistics as Statistic[]);
  selectedFilter = signal<FilterType>('All');
  selectedPriority = signal<PriorityType | null>(null);

  tasksList = signal<Task[]>(tasks as unknown as Task[]);
  tasksWithOverdue = computed(() =>
    this.tasksList().map(task => ({
      ...task,
      overdue: new Date(task.dueDate) < new Date()
    }))
  );

  filteredTasks = computed(() =>
    this.tasksWithOverdue().filter(task =>
      this.selectedPriority() === null ||
      task.priority === this.selectedPriority()?.toLowerCase()
    )
  );

  todoTasks = computed(() => this.filteredTasks().filter(task => task.status === 'todo'));
  inProgressTasks = computed(() => this.filteredTasks().filter(task => task.status === 'in_progress'));
  doneTasks = computed(() => this.filteredTasks().filter(task => task.status === 'done'));


  selectedFilterChange(event: FilterType) {
    this.selectedFilter.set(event);
  }

  selectedPriorityChange(event: PriorityType | null) {
    this.selectedPriority.set(event);
  }

}

