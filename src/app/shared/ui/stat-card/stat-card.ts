import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'stat-card',
  standalone: true,
  templateUrl: './stat-card.html',
  styleUrls: ['./stat-card.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCard {
  logo = input<string>();
  value = input<string | number>();
  trend = input<string>();
  type = input<string>();
 }