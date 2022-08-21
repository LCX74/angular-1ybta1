import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HeroJobAdComponent, HeroProfileComponent } from './ad-banner/ad-banner.component';
import { AdItem } from './missioncontrol/missioncontrol.component';

@Injectable()
export class MissionService {

  //通讯对象
  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  //获取消息
  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  //发送消息
  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }
}
/**
 * 演示通过服务进行组件之间的双向通信
 */
