import { Component, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type FilterType = 'All' | 'To Do' | 'In Progress' | 'Done';
export type PriorityType = 'High' | 'Medium' | 'Low';

@Component({
  selector: 'app-filters-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters-bar.html',
  styleUrl: './filters-bar.scss',
})
export class FiltersBar {
  filters: FilterType[] = ['All', 'To Do', 'In Progress', 'Done'];

  selectedFilter: FilterType = 'All';

  priorities: PriorityType[] = ['High', 'Medium', 'Low'];
  selectedPriority: PriorityType = 'High';

  selectFilter(filter: FilterType) {
    this.selectedFilter = filter;
    console.log('Selected filter:', filter);
  }

  selectPriority(priority: PriorityType) {
    this.selectedPriority = priority;
    console.log('Selected priority:', priority);
  }
}
