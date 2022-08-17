import { Routes } from '@angular/router';
import { NotFoundComponent } from './404';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';


export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];
