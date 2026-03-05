import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { StatCard } from '../../shared/ui/stat-card/stat-card';
import { FiltersBar, FilterType, PriorityType } from "../../core/layout/filters-bar/filters-bar";
import { TasksListPerPriority } from "../../core/layout/tasks-list-per-priority/tasks-list-per-priority";
import { statistics } from '../../json/stats.json'
import { Statistic, Task, TaskStatusEnum } from '../../core/models/models';
import { tasks } from '../../json/tasks.json';
import { TasksService } from '../../core/services/tasks-service';
import { Subscription } from 'rxjs';
@Component({
  standalone: true,
  imports: [StatCard, FiltersBar, TasksListPerPriority],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {
  TaskStatusEnum = TaskStatusEnum;
  private tasksService = inject(TasksService);
  sub!: Subscription;
  stats = signal<Statistic[]>(statistics as Statistic[]);
  selectedFilter = signal<FilterType>('All');
  selectedPriority = signal<PriorityType | null>(null);
  tasksList = signal<Task[]>(tasks as unknown as Task[]);

  searchQuery = computed(() => this.tasksService.searchQuery());

  filteredTasks = computed(() =>
    this.tasksList().map(task => ({
      ...task,
      overdue: new Date(task.dueDate) < new Date()
    })).filter(task =>
      this.selectedPriority() === null ||
      task.priority === this.selectedPriority()?.toLowerCase()
    ).filter(task => {
      if (task.title.toLowerCase().includes(this.searchQuery()) ||
        task.description.toLowerCase().includes(this.searchQuery())) {
        return true;
      }
      return false;
    })
  );

  todoTasks = computed(() => this.filteredTasks().filter(task => task.status === 'todo'));
  inProgressTasks = computed(() => this.filteredTasks().filter(task => task.status === 'in_progress'));
  doneTasks = computed(() => this.filteredTasks().filter(task => task.status === 'done'));


  ngOnInit(): void {
    this.sub = this.tasksService.taskAdded.subscribe((newTask) => {
      this.tasksList.update((tasks) => [newTask, ...tasks]);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  selectedFilterChange(event: FilterType) {
    this.selectedFilter.set(event);
  }

  selectedPriorityChange(event: PriorityType | null) {
    this.selectedPriority.set(event);
  }

}

