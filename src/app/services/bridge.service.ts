import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { LightGet } from '../model/hue/lightGet';
import { Response } from '../model/hue/response';

@Injectable({
  providedIn: 'root',
})
export class BridgeService {
  // private v2api: string = `https://${environment.bridgeIp}/clip/v2`;
  private v2api: string = `http://localhost:4200/clip/v2`; // temporary; for development
  private applicationKey: string = environment.applicationKey;

  private options = {
    headers: new HttpHeaders({
      'hue-application-key': this.applicationKey,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getAllLights(): Observable<Response<LightGet>> {
    return this.httpClient
      .get<Response<LightGet>>(this.v2api + '/resource/light', this.options)
      .pipe(catchError(this.handleError<LightGet>('getAllLights')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   */
  private handleError<S>(operation = 'operation') {
    return (error: any): Observable<Response<S>> => {
      console.error(error);
      console.warn(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of({
        errors: [{ description: error.message }],
        data: [],
      } as Response<S>);
    };
  }
}
