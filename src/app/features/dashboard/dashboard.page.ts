import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StatCard } from '../../shared/ui/stat-card/stat-card';
import { FiltersBar } from "../../core/layout/filters-bar/filters-bar";

@Component({
  standalone: true,
  imports: [StatCard, FiltersBar],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {
  stats = [
    { title: 'Total Tasks', value: 156, trend: '+12% this week', logo: '📊' },
    { title: 'Completed', value: 120, trend: '+8%', logo: '✅' },
    { title: 'Pending', value: 36, trend: '+20%', logo: '🔄' },
    { title: 'Overdue', value: 15, trend: '-5%', logo: '⚠️' }
  ];
}