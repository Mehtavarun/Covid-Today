import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subject = new Subject();
  result: Observable<any>;
  searchForm: FormGroup;
  stateList: any;
  filteredStateList: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchInput: new FormControl('')
    });
    this.getStateDetails();
  }

  getStateDetails() {
    this.dashboardService.getStateCovidDetails().subscribe((result: any) => {
      this.stateList = result.statewise;
      this.filteredStateList = result.statewise;
      this.filterList();
    });
  }

  private filterList() {
    this.subject
      .pipe(
        debounceTime(500),
        map(searchText =>
          this.stateList.filter(stateDetails => {
            return stateDetails.state
              .toLowerCase()
              .includes(searchText.toString().toLowerCase());
          })
        )
      )
      .subscribe(filteredList => (this.filteredStateList = filteredList));
  }

  search() {
    this.subject.next(this.searchForm.value.searchInput);
  }
}
