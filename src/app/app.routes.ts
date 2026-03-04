import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layout/shell/shell')
                .then(m => m.ShellComponent),
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./features/dashboard/dashboard.page')
                        .then(m => m.DashboardPage)
            },
            {
                path: 'tasks',
                loadComponent: () =>
                    import('./features/tasks/tasks.page')
                        .then(m => m.TasksPage)
            },
            {
                path: 'users',
                loadComponent: () =>
                    import('./features/users/users.page')
                        .then(m => m.UsersPage)
            }
        ]
    }
];