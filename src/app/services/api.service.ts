import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = "http://localhost:8080";
  private endpoint: string = "";

  constructor(private http: HttpClient) {}

  getBrawlers(): Observable<any> {
    this.endpoint = "/brawlers";
    const completeUrl: string = this.url + this.endpoint;
    console.log(completeUrl);
    return this.http.get(completeUrl);
  }
}
