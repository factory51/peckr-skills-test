import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/monitor-list/monitor-list.component').then(m => m.MonitorListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'monitors/:id',
    loadComponent: () => import('./components/monitor-detail/monitor-detail.component').then(m => m.MonitorDetailComponent),
    canActivate: [authGuard]
  },
  {
    path: 'add-monitor',
    loadComponent: () => import('./components/add-monitor/add-monitor.component').then(m => m.AddMonitorComponent),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
