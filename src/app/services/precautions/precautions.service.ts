import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrecautionsService {
  constructor(private httpClient: HttpClient) {}

  public getPrecautions() {
    return this.httpClient.get(`${env.webApiUrl}/precautions`);
  }
}
