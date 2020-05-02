import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityDetailsComponent } from './city-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CityDetailsComponent }
];

@NgModule({
  declarations: [CityDetailsComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [CityDetailsComponent, RouterModule]
})
export class CityDetailsModule {}
