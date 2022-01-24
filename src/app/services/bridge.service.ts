import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BridgeService {
  // private v2api: string = `https://${environment.hueBridge}/clip/v2`;
  private v2api: string = `http://localhost:4200/clip/v2`; // temporary; for development
  private applicationKey: string = environment.applicationKey;

  private options = {
    headers: new HttpHeaders({
      'hue-application-key': this.applicationKey,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getAllLights(): Observable<string> {
    return this.httpClient.get<string>(
      this.v2api + '/resource/light',
      this.options
    );
  }
}
