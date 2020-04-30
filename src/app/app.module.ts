import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TitleBarComponent } from './shared/title-bar/title-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataService } from './services/data.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './services/loader/loader.service';
import { LoaderInterceptor } from './shared/http-intercepters/loader.intercepter';
import { ErrorHandlerInterceptor } from './shared/http-intercepters/error-handler.intercepter';
import { CityDetailsComponent } from './city-details/city-details.component';
import { NewsListComponent } from './news-list/news-list.component';
import { TextLength } from './shared/pipes/text-length.pipe';

const webApiConfig = {
  passThruUnknownUrl: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    TitleBarComponent,
    DashboardComponent,
    LatestNewsComponent,
    PrecautionsComponent,
    AddNewsComponent,
    NotFoundComponent,
    LoaderComponent,
    CityDetailsComponent,
    NewsListComponent,
    TextLength
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService, webApiConfig)
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
