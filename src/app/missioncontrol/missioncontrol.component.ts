import { Component } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-control',
  templateUrl: `./missioncontrol.component.html`,
  providers: [MissionService]
})
export class MissioncontrolComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
}

/**
 * 指令部分
 */
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appExampleZippyContent]'
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) { }
}

@Directive({
  selector: '[adHost]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

export interface AdComponent {
  data: any;
}

import { Type } from '@angular/core';
export class AdItem {
  constructor(public component: Type<any>, public data: any) {}
}