import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { StoryService } from './service/story.service/story.service';

@Component({
  selector: 'bv-app-root',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private location: Location,
    private titleService: Title,
    private storyService: StoryService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      let title = 'லோகுவின் கதைகள்';
      let parts = [];
      if (this.location.path().match(/.*\/short-stories/g) != null) {
        title = 'சிறுகதைகள்';
      } else if ( (parts = this.location.path().match(/.*\/story\/.*\/.*\/[0-9]+.*/g)) != null) {
        const regex = /(?:.*\/story\/)(.*)(?:\/.*\/[0-9]+.*)/g;
        title = this.storyService.getStoryName(regex.exec(parts[0])[1]);
      }
      this.titleService.setTitle(title);
    });
  }
}
