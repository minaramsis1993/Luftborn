import { Component, computed, Inject, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Task, TaskPriority } from '../../models/models';
import { TasksService } from '../../services/tasks-service';



@Component({
  selector: 'app-manage-task',
  imports: [FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  templateUrl: './manage-task.html',
  styleUrl: './manage-task.scss',
})
export class ManageTask {
  title = signal('');
  description = signal('');
  priority = signal<'High' | 'Medium' | 'Low' | null>(null);
  dueDate = signal<string>(''); // ISO format yyyy-mm-dd
  assigneeName = signal('');
  assigneeEmail = signal('');
  tags = signal('');
  isAdd = signal(true);

  isDisabled = computed(() => {
    return !this.title() || !this.description() || !this.priority()
      || !this.dueDate() || !this.assigneeName() || !this.assigneeEmail();
  });

  constructor(
    private dialogRef: MatDialogRef<ManageTask>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tasksService: TasksService
  ) {
    // console.log('Dialog data:', data);
  }


  generateId() {
    return 'task-' + Math.floor(Math.random() * 1000).toString();
  }

  onSubmit() {
    const task: Task = {
      id: this.generateId(),
      title: this.title(),
      description: this.description(),
      status: 'in_progress',
      priority: (this.priority()?.toLowerCase() ?? 'medium') as TaskPriority,
      dueDate: this.dueDate(),
      assignee: {
        id: 'user-001', // generate or static for demo purpose
        name: this.assigneeName(),
        avatar: this.getAvatar(this.assigneeName()),
        email: this.assigneeEmail()
      },
      tags: this.tags().split(',').map(t => t.trim()).filter(t => t),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isOverdue: false,
      completedAt: ''
    };
    this.tasksService.taskAdded.next(task);
    this.dialogRef.close(task);
  }

  checkOverdue(dateStr: string): boolean {
    if (!dateStr) return false;
    const today = new Date();
    const due = new Date(dateStr);
    return due < today;
  }

  getAvatar(name: string) {
    if (!name) return '';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }
}
