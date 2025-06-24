import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path:'admin',
        loadComponent:()=> import('./admin/admin').then(m=> m.Admin),
        canActivate:[authGuard]
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        loadComponent:()=>import('./login/login').then(m => Login)
    },
    
];
