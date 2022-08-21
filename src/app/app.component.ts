import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { AdService } from './ad.service';
import { MissionService } from './mission.service';
import { AdItem } from './missioncontrol/missioncontrol.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css'],
  providers: [AdService]
})
export class AppComponent implements OnInit {
  @ViewChild(ProductListComponent)
  private timerComponent!: ProductListComponent;

  ads: AdItem[] = [];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  ok(name: string) {
    this.timerComponent.onClick(name);
  }
}
//test

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
