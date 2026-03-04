import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  activeTab: 'dashboard' | 'tasks' = 'dashboard';

  changeActiveTab(tab: 'dashboard' | 'tasks') {
    this.activeTab = tab;
  }
}
