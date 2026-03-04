import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "../../core/layout/sidebar/sidebar";
import { Topbar } from "../../core/layout/topbar/topbar";

@Component({
  standalone: true,
  selector: 'app-shell',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    Topbar,
    Sidebar
  ],
  templateUrl: './shell.html',
  styleUrls: ['./shell.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent {

}