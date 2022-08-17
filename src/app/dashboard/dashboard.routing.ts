import { Routes } from '@angular/router';
import { AuthenticationGuard } from '../core';
import { DashboardComponent } from './dashboard/dashboard.component';


export const DashboardRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      }
    ]
  }
];
