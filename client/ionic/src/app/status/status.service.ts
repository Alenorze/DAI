import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

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

}
