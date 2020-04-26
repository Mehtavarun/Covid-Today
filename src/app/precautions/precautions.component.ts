import { Component, OnInit } from '@angular/core';
import { IPrecautions } from '../models/precautions';
import { PrecautionsService } from '../services/precautions/precautions.service';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {
  precautions: IPrecautions[];
  constructor(private precautionsSerivce: PrecautionsService) {}

  ngOnInit(): void {
    this.precautionsSerivce
      .getPrecautions()
      .subscribe((precautions: IPrecautions[]) => {
        this.precautions = precautions;
      });
  }
}
