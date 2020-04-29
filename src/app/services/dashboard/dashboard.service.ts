import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  public getStateCovidDetails() {
    return this.httpClient.get<any>(`https://api.covid19india.org/data.json`);
  }

  public getCityCovidDetails() {
    return this.httpClient.get<any>(
      `https://api.covid19india.org/state_district_wise.json`
    );
  }
}
