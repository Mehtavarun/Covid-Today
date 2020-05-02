import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecautionsComponent } from './precautions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PrecautionsComponent }
];

@NgModule({
  declarations: [PrecautionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [PrecautionsComponent, RouterModule]
})
export class PrecautionModule {}
