import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUserByUsername(username) {
    //regex to match exact string
    return this.httpClient.get(`${env.webApiUrl}/users?username=^${username}$`);
  }
}
