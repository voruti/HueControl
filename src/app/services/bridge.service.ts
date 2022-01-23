import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BridgeService {
  private apiUrl: string = `https://${environment.bridgeHost}/api/${environment.username}`;

  constructor(private httpClient: HttpClient) {}

  public getInfo(): Observable<string> {
    return this.httpClient.get<string>(this.apiUrl);
  }
}
