import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';
import { Subscription, Observable } from 'rxjs';

const COLS = {
  normal: 2,
  small: 1
};
const ROW_HEIGHT = {
  normal: '27em',
  small: '15em'
};
const GUTTER_SIZE = {
  normal: '2.6em',
  small: '1em'
};
const CONTENTS = {
  normal: [
    {
      source: 'sirukadhaigal_button.gif',
      width: '35vw',
      align: 'right'
    },
    {
      width: '60%',
      align: 'left',
      heading: 'சிறுகதைகள்',
      description: 'சிறுகதைகளின் தொகுப்புக்கு செல்ல ‘சிறுகதைகள்’ பொத்தானை அழுத்தவும்'
    },
    {
      width: '60%',
      align: 'right',
      heading: 'சிறுகதைகளின் தொகுப்பு',
      description: 'இத்தொகுப்பில் உள்ள கதைகளை வாசிக்க கதையின் பெயரட்டையை தொடுங்கள்'
    },
    {
      source: 'story_button.gif',
      width: '37vw',
      align: 'left'
    },
    {
      source: 'left_navigation.gif',
      width: '33vw',
      align: 'right'
    },
    {
      width: '60%',
      align: 'left',
      heading: 'கதையின் பக்கங்கள்',
      description: 'அடுத்து பக்கத்துக்கு செல்ல பக்கத்தின் இடது புறத்தில் தீண்டவும்'
    },
    {
      width: '60%',
      align: 'right',
      heading: 'கதையின் பக்கங்கள்',
      description: 'முன் பக்கத்துக்கு செல்ல பக்கத்தின் வலது புறத்தில் தீண்டவும்'
    },
    {
      source: 'right_navigation.gif',
      width: '33vw',
      align: 'left'
    }
  ],
  small: [
    {
      width: '90%',
      align: 'center',
      heading: 'சிறுகதைகள்',
      description: 'சிறுகதைகளின் தொகுப்புக்கு செல்ல ‘சிறுகதைகள்’ பொத்தானை அழுத்தவும்'
    },
    {
      source: 'sirukadhaigal_button.gif',
      width: '85vw',
      align: 'center'
    },
    {
      width: '90%',
      align: 'center',
      heading: 'சிறுகதைகளின் தொகுப்பு',
      description: 'இத்தொகுப்பில் உள்ள கதைகளை வாசிக்க கதையின் பெயரட்டையை தொடுங்கள்'
    },
    {
      source: 'story_button.gif',
      width: '87vw',
      align: 'center'
    },
    {
      width: '90%',
      align: 'center',
      heading: 'கதையின் பக்கங்கள்',
      description: 'அடுத்து பக்கத்துக்கு செல்ல பக்கத்தின் இடது புறத்தில் தீண்டவும்'
    },
    {
      source: 'left_navigation.gif',
      width: '83vw',
      align: 'center'
    },
    {
      width: '90%',
      align: 'center',
      heading: 'கதையின் பக்கங்கள்',
      description: 'முன் பக்கத்துக்கு செல்ல பக்கத்தின் வலது புறத்தில் தீண்டவும்'
    },
    {
      source: 'right_navigation.gif',
      width: '83vw',
      align: 'center'
    }
  ]
};

@Component({
  selector: 'bv-landing-page',
  templateUrl: './landing-page.component.pug',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  grid = {
    cols: COLS.normal,
    rowHeight: ROW_HEIGHT.normal,
    gutterSize: GUTTER_SIZE.normal
  };

  gridContents = [];

  private _querySubscriptions: Subscription[];

  constructor(
    private _mediaService: TdMediaService,
    private _ngZone: NgZone
  ) {}

  getSource(path: string) {
    return require('../../../assets/img/landing_page/' + path);
  }

  setGridSettings(mode: string) {
    this.grid = {
      cols: COLS[mode],
      rowHeight: ROW_HEIGHT[mode],
      gutterSize: GUTTER_SIZE[mode]
    };
    this.gridContents = CONTENTS[mode];
  }

  watchScreen(): void {
    this._querySubscriptions = [];
    this._querySubscriptions.push(this._mediaService.registerQuery('sm').subscribe((matches: boolean) => {
      this._ngZone.run(() => {
        if (matches) {
          this.setGridSettings('small'); // medium
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
