import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topbar',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  searchQuery = signal<string>('');

  onSearch(query: string) {
    console.log('Searching for:', query);
    // implement filtering tasks in parent component
  }

}
