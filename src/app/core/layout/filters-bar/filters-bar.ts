import { Component, input, output, Type } from '@angular/core';
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
  selectedFilter = input.required<FilterType>();
  selectedFilterChange = output<FilterType>();

  priorities: any[] = ['High', 'Medium', 'Low'];
  selectedPriority = input.required<PriorityType | null>();
  selectedPriorityChange = output<PriorityType | null>();

  selectFilter(filter: FilterType) {
    this.selectedFilterChange.emit(filter);
  }

  selectPriority(priority: PriorityType | null) {
    this.selectedPriorityChange.emit(priority);
  }
}
