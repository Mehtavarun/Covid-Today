import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { IPrecautions } from 'src/app/models/precautions';

@Injectable({
  providedIn: 'root'
})
export class PrecautionsService {
  constructor(private httpClient: HttpClient) {}

  public getPrecautions() {
    return this.httpClient.get<IPrecautions[]>(`${env.webApiUrl}/precautions`);
  }
}
