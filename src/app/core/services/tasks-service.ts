import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  activeTab = signal<'dashboard' | 'tasks'>('dashboard');
  searchQuery = signal<string>('');
  taskAdded = new Subject<Task>();
  taskEdited = new Subject<Task>();
}
