import { Component, computed, Inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Task, TaskPriority } from '../../models/models';
import { TasksService } from '../../services/tasks-service';

@Component({
  selector: 'app-manage-task',
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  standalone: true,
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
    private tasksService: TasksService,
    private dialogRef: MatDialogRef<ManageTask>,
    @Inject(MAT_DIALOG_DATA) public data: {
      isAdd: boolean,
      task?: Task
    },
  ) {
    if (!data.isAdd && !!data.task) {
      const {
        title,
        description,
        priority,
        dueDate,
        assignee: { name, email },
        tags
      } = data.task;
      this.title.set(title);
      this.description.set(description);
      this.priority.set(priority.charAt(0).toUpperCase() + priority.slice(1) as 'High' | 'Medium' | 'Low');
      this.dueDate.set(dueDate);
      this.assigneeName.set(name);
      this.assigneeEmail.set(email);
      this.tags.set(tags.join(', '));
      this.isAdd.set(false);

    }
  }

  generateId() {
    return 'task-' + Math.floor(Math.random() * 1000).toString();
  }

  onSubmit() {
    const task: Task = {
      id: this.data.isAdd ? this.generateId() : this.data.task?.id || this.generateId(),
      title: this.title(),
      description: this.description(),
      status: this.data.isAdd ? 'todo' : this.data.task?.status || 'todo',
      priority: (this.priority()?.toLowerCase() ?? 'medium') as TaskPriority,
      dueDate: this.dueDate(),
      assignee: {
        id: this.data.isAdd ? this.generateId() : this.data.task?.assignee.id || this.generateId(),
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
    if (this.data.isAdd) {
      this.tasksService.taskAdded.next(task);
    } else {
      this.tasksService.taskEdited.next(task);
    }
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
