import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Status } from './status';


const httpOptions = {
    headers: new HttpHeaders({'ContentType': 'application/json'})
};

@Injectable()
export class StatusAPIService {


  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    const apiListEndpoint = '${this.baseUrl}status/';
    return this.http.get(apiListEndpoint);
  }

  get(id?: number): Observable<Status> {
      if (!id) {
          id = 10;
      }
      const apiDetailEndpoint = '${this.baseUrl}status/${id}/';
      return this.http.get<Status>(apiDetailEndpoint);
  }


}
