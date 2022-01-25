import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LightGet } from '../../model/hue/lightGet';
import { BridgeService } from '../../services/bridge.service';
import { ConfigService } from '../../services/config.service';
import { AcknowledgementDialogComponent } from '../acknowledgement-dialog/acknowledgement-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public lights?: LightGet[];

  constructor(
    private bridgeService: BridgeService,
    private configService: ConfigService,
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.bridgeService.getAllLights().subscribe((response) => {
      // debug print all lights:
      /*console.log(
        response.data
          .map(
            (light) =>
              `${light.id_v1?.substring(8)}:\t${light.metadata.name} (${
                light.id
              })`
          )
          .join('\n')
      );*/

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

  public wishLightOn(light: LightGet, on: boolean = true): void {
    if (this.isAcknowledgementLight(light)) {
      const dialogRef: MatDialogRef<AcknowledgementDialogComponent, boolean> =
        this.matDialog.open(AcknowledgementDialogComponent, {
          data: { name: light.metadata.name },
        });

      dialogRef.afterClosed().subscribe((confirmed) => {
        if (confirmed) {
          this.turnLightOn(light, on);
        }
      });
    } else {
      this.turnLightOn(light, on);
    }
  }

  private turnLightOn(light: LightGet, on: boolean = true): void {
    this.bridgeService.turnLightOn(light.id, on).subscribe((response) => {
      if (response.errors.length === 0 && response.data.length > 0) {
        this.matSnackBar.open('Executed', undefined, { duration: 1000 });
      }
    });
  }
}
