import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  template: `<h2>Users Works</h2>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPage { }