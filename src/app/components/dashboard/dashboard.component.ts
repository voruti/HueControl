import { Component, OnInit } from '@angular/core';

import { LightGet } from '../../model/hue/lightGet';
import { BridgeService } from '../../services/bridge.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public lights?: LightGet[];

  constructor(
    private bridgeService: BridgeService,
    public configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.bridgeService.getAllLights().subscribe((response) => {
      // debug print all lights:
      console.log(
        response.data
          .map(
            (light) =>
              `${light.id_v1?.substring(8)}:\t${light.metadata.name} (${
                light.id
              })`
          )
          .join('\n')
      );

      // save lights for dashboard:
      this.lights = response.data;
    });
  }

  public isAcknowledgementLight(light: LightGet): boolean {
    return (
      (light.metadata.name &&
        this.configService.config.acknowledgementLights.includes(
          light.metadata.name
        )) ||
      this.configService.config.acknowledgementLights.includes(light.id)
    );
  }
}
