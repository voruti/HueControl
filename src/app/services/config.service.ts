import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

export interface Config {
  bridgeIp: string;
  applicationKey: string;
  acknowledgementLights: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public config: Config;

  constructor(private httpClient: HttpClient) {
    this.config = {
      bridgeIp: '',
      applicationKey: '',
      acknowledgementLights: [],
    };
  }

  loadConfig(): Promise<void> {
    return lastValueFrom(
      this.httpClient.get<Config>('/assets/config.json')
    ).then((config) => {
      this.config = config;
    });
  }
}
