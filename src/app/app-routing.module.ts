import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { LoginService } from './services/login/user/login.service';
import { AdminLoginService } from './services/login/admin/admin-login.service';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: [LoginService]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [LoginService]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    pathMatch: 'full',
    canActivate: [LoginService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [LoginService]
  },
  {
    path: 'news',
    component: LatestNewsComponent,
    pathMatch: 'full',
    canActivate: [LoginService]
  },
  {
    path: 'precautions',
    component: PrecautionsComponent,
    pathMatch: 'full',
    canActivate: [LoginService]
  },
  {
    path: 'add',
    component: PrecautionsComponent,
    pathMatch: 'full',
    canActivate: [LoginService],
    children: [
      {
        path: 'news',
        component: AddNewsComponent,
        pathMatch: 'full',
        canActivate: [AdminLoginService]
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
