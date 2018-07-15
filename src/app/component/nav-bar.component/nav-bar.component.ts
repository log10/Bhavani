import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { map } from 'rxjs/operators';

import { slideUpAndDownAnimation } from '../../animations';

@Component({
  selector: 'bv-nav-bar',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './nav-bar.component.pug',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [ slideUpAndDownAnimation ]
})
export class NavBarComponent implements OnInit, OnDestroy {
  @HostBinding('@slideUpAndDown') slideState = 'visible';

  constructor(
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      this.slideState = this.location.path().match(/.*\/story\/.*\/.*\/[0-9]+.*/g) == null ? 'visible' : 'hidden';
    });
  }
  ngOnDestroy(): void {}

}
