import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { 
  }

  async post(resource: string, body: any): Promise<any> {
    return lastValueFrom(this.httpClient.post(this.baseUrl + resource, body));
  }

  async get(resource: string): Promise<any> {
    return lastValueFrom(this.httpClient.get(this.baseUrl + resource));
  }

  async patch(resource: string, body: any): Promise<any> {
    return lastValueFrom(this.httpClient.patch(this.baseUrl + resource, body));
  }
}
