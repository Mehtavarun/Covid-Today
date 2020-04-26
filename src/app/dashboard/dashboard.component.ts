import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchForm: FormGroup;
  // searchInput: FormControl;
  stateList: any;
  filteredStateList: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchInput: new FormControl('')
    });
    this.dashboardService.getStateCovidDetails().subscribe((result: any) => {
      this.stateList = result.statewise;
      this.filteredStateList = result.statewise;
    });
  }

  search() {
    this.filteredStateList = this.stateList;
    this.filteredStateList = this.stateList.filter(stateDetails => {
      return (
        stateDetails.state.indexOf(this.searchForm.controls.searchInput) > -1
      );
    });
  }
}
