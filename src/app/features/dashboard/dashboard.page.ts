import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StatCard } from '../../shared/ui/stat-card/stat-card';

@Component({
  standalone: true,
  imports: [StatCard],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage { }