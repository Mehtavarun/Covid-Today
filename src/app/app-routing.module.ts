import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AdminLoginService } from './services/login/admin/admin-login.service';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'logout',
    component: LogoutComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: LatestNewsComponent,
    pathMatch: 'full',
    canActivateChild: [AdminLoginService],
    children: [
      {
        path: 'add',
        component: AddNewsComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'precautions',
    component: PrecautionsComponent,
    pathMatch: 'full'
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
