import { Component, OnInit } from '@angular/core';

import { BridgeService } from '../../services/bridge.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private bridgeService: BridgeService) {}

  ngOnInit(): void {
    this.bridgeService.getAllLights().subscribe((response) => {
      response.data.forEach((lightGet) => console.log(lightGet.metadata.name));
    });
  }
}
