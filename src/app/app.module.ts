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
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataService } from './services/data.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './services/loader/loader.service';
import { LoaderInterceptor } from './shared/http-intercepters/loader.intercepter';
import { ErrorHandlerInterceptor } from './shared/http-intercepters/error-handler.intercepter';
import { NewsListComponent } from './news-list/news-list.component';
import { TextLength } from './shared/pipes/text-length.pipe';
import { TitlebarModule } from './shared/title-bar/titlebar.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CityDetailsModule } from './city-details/city-details.module';
import { PrecautionModule } from './precautions/precaution.module';

const webApiConfig = {
  passThruUnknownUrl: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    LatestNewsComponent,
    AddNewsComponent,
    NotFoundComponent,
    LoaderComponent,
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
    TitlebarModule,
    DashboardModule,
    CityDetailsModule,
    PrecautionModule,
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
