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
export class DashboardPage { }