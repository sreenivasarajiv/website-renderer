import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {

  private baseURL = 'http://localhost:3000/websites';

  constructor(private httpClient: HttpClient) { }

  getWebsites(): Observable<{ id: number, name: string }[]> {
    return this.httpClient.get(this.baseURL) as Observable<{ id: number, name: string }[]>;
  }

}
