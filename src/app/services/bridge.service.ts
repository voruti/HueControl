import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LightGet } from '../model/hue/lightGet';
import { Response } from '../model/hue/response';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class BridgeService {
  // private v2api: string = `https://${this.configService.config.bridgeIp}/clip/v2`;
  private v2api: string = `http://localhost:4200/clip/v2`; // temporary; for development - using CORS proxy

  private options = {
    headers: new HttpHeaders({
      'hue-application-key': this.configService.config.applicationKey,
    }),
  };

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {}

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
