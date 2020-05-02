import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './title-bar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [TitleBarComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  exports: [TitleBarComponent]
})
export class TitlebarModule {}
