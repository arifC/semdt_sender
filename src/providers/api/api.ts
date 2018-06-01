import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  url: string = 'http://localhost:3000/api';
  //url: string = 'http://localhost:8080/api/v1';


  constructor(public http: HttpClient) {
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }
}