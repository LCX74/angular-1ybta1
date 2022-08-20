import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(ProductListComponent)
  private timerComponent!: ProductListComponent;
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
