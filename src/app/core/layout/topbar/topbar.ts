import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks-service';


@Component({
  selector: 'app-topbar',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  searchQuery = signal<string>('');
  constructor(private tasksService: TasksService) { }

  onSearch(query: string) {
    this.tasksService.searchQuery.set(query);
  }

}
