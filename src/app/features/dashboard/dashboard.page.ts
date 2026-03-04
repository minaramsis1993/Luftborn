import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  template: `<h2>Dashboard Works</h2>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage { }