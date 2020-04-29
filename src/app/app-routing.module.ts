import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { CityDetailsComponent } from './city-details/city-details.component';
import { NewsListComponent } from './news-list/news-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
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
    path: 'state/:state',
    component: CityDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'precautions',
    component: PrecautionsComponent,
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: LatestNewsComponent,
    children: [
      {
        path: '',
        component: NewsListComponent
      },
      {
        path: 'add',
        component: AddNewsComponent,
        canActivate: [AuthGuardService]
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
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
