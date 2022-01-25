import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LightGet } from '../model/hue/lightGet';
import { Response } from '../model/hue/response';
import { ConfigService } from './config.service';
import { WINDOW } from '../providers/window.providers';
import { ResourceIdentifierPut } from '../model/hue/resourceIdentifierPut';
import { LightPut } from '../model/hue/lightPut';

@Injectable({
  providedIn: 'root',
})
export class BridgeService {
  // private v2api: string = `https://${this.configService.config.bridgeIp}/clip/v2`;
  private v2api: string;

  private options = {
    headers: new HttpHeaders({
      'hue-application-key': this.configService.config.applicationKey,
    }),
  };

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    @Inject(WINDOW) private window: Window,
    private matSnackBar: MatSnackBar
  ) {
    this.v2api = `${this.window.location.origin}/clip/v2`; // using CORS proxy
  }

  public getAllLights(): Observable<Response<LightGet>> {
    return this.httpClient
      .get<Response<LightGet>>(this.v2api + '/resource/light', this.options)
      .pipe(catchError(this.handleError<LightGet>('getAllLights')));
  }

  public putLightById(
    id: string,
    jsonBody: LightPut
  ): Observable<Response<ResourceIdentifierPut>> {
    return this.httpClient
      .put<Response<ResourceIdentifierPut>>(
        `${this.v2api}/resource/light/${id}`,
        jsonBody,
        this.options
      )
      .pipe(
        catchError(this.handleError<ResourceIdentifierPut>('putLightById'))
      );
  }

  public turnLightOn(
    id: string,
    on: boolean = true
  ): Observable<Response<ResourceIdentifierPut>> {
    return this.putLightById(id, { on: { on: on } });
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   */
  private handleError<S>(operation = 'operation') {
    return (error: any): Observable<Response<S>> => {
      this.matSnackBar.open(`${operation} failed:\n${error.message}`, 'Close');

      // Let the app keep running by returning an empty result.
      return of({
        errors: [{ description: error.message }],
        data: [],
      } as Response<S>);
    };
  }
}
