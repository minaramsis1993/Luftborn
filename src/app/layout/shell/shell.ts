import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@Component({
  standalone: true,
  selector: 'app-shell',
  imports: [
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  templateUrl: './shell.html',
  styleUrls: ['./shell.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent {}