import { Component, ContentChild, ContentChildren, Input, OnDestroy } from '@angular/core';

import { MissionService } from '../mission.service';
import { Subscription } from 'rxjs';
import { ZippyContentDirective } from '../missioncontrol/missioncontrol.component';

@Component({
  selector: 'app-astronaut',
  templateUrl: "./astronaut.component.html"
})
export class AstronautComponent implements OnDestroy {
  @Input() astronaut = '';
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      });
  }

  confirm() {
    debugger
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}