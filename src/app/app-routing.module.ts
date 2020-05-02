import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
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
    pathMatch: 'full',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'state/:state',
    pathMatch: 'full',
    loadChildren: () =>
      import('./city-details/city-details.module').then(
        m => m.CityDetailsModule
      )
  },
  {
    path: 'precautions',
    pathMatch: 'full',
    loadChildren: () =>
      import('./precautions/precaution.module').then(m => m.PrecautionModule)
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
