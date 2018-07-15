
import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { StoryService } from '../../service/story.service/story.service';

const COLS = {
  normal: 4,
  medium: 2,
  small: 1
};
const ROW_HEIGHT = {
  normal: '20em',
  medium: '20em',
  small: '20em'
};

@Component({
  selector: 'bv-grid-view',
  templateUrl: './grid-view.component.pug',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit, OnDestroy {
  stories = [];
  grid = {
    cols: COLS.normal,
    rowHeight: ROW_HEIGHT.normal
  };
  private _querySubscriptions: Subscription[];

  constructor(
    private _mediaService: TdMediaService,
    private _ngZone: NgZone,
    private router: Router,
    private storyService: StoryService
  ) {
    this.stories = this.storyService.getStories();
  }

  setGridSettings(mode: string) {
    this.grid = {
      cols: COLS[mode],
      rowHeight: ROW_HEIGHT[mode]
    };
  }

  watchScreen(): void {
    this._querySubscriptions = [];
    this._querySubscriptions.push(this._mediaService.registerQuery('sm').subscribe((matches: boolean) => {
      this._ngZone.run(() => {
        if (matches) {
          this.setGridSettings('medium');
        }
      });
    }));
    this._querySubscriptions.push(this._mediaService.registerQuery('xs').subscribe((matches: boolean) => {
      this._ngZone.run(() => {
        if (matches) {
          this.setGridSettings('small');
        }
      });
    }));
    this._querySubscriptions.push(this._mediaService.registerQuery('gt-sm').subscribe((matches: boolean) => {
      this._ngZone.run(() => {
        if (matches) {
          this.setGridSettings('normal');
        }
      });
    }));
  }

  ngOnInit(): void {
    this.watchScreen();
  }

  ngOnDestroy(): void {
    this._querySubscriptions.forEach(sub => sub.unsubscribe());
  }
}
