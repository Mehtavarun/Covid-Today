import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  subject = new Subject();
  result: Observable<any>;
  searchForm: FormGroup;
  cityList: any[] = [];
  filteredCityList: any[];

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchInput: new FormControl('')
    });
    this.getCityDetails();
  }

  getCityDetails() {
    this.dashboardService.getCityCovidDetails().subscribe((result: any) => {
      const state = decodeURIComponent(this.router.url.split('/')[2]);
      const districtObj = result[state].districtData;
      for (let [city, value = {}] of Object.entries(districtObj)) {
        const cases = Object.assign({}, value, { city });
        this.cityList.push(cases);
      }
      this.filteredCityList = this.cityList;
      this.filterList();
    });
  }

  private filterList() {
    this.subject
      .pipe(
        debounceTime(500),
        map(searchText =>
          this.cityList.filter(cityDetails => {
            return cityDetails.city
              .toLowerCase()
              .includes(searchText.toString().toLowerCase());
          })
        )
      )
      .subscribe(filteredList => (this.filteredCityList = filteredList));
  }

  search() {
    this.subject.next(this.searchForm.value.searchInput);
  }
}
