
import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, Observable, of, from } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import { TdMediaService } from '@covalent/core/media';

import { StoryService, Story } from '../../service/story.service/story.service';


@Component({
  selector: 'bv-reader-content',
  templateUrl: './reader-content.component.pug',
  styleUrls: ['./reader-content.component.scss']
})
export class ReaderContentComponent implements OnInit, OnDestroy {
  pageContent: any;
  pageStyle = {
    'font-size' : '3em'
  };
  pageNumber = '1';

  private _querySubscriptions: Subscription[];
  private storyName: Observable<string>;

  constructor(
    private _mediaService: TdMediaService,
    private route: ActivatedRoute,
    private router: Router,
    private _ngZone: NgZone,
    private storyService: StoryService,
    private sanitizer: DomSanitizer
  ) {}

  watchScreen(): void {
    this._querySubscriptions = [];
    this._querySubscriptions.push(this._mediaService.registerQuery('sm').subscribe((matches: boolean) => {
      this._ngZone.runOutsideAngular(() => {
        if (matches) {
          this.router.navigate(['../../medium/' + this.pageNumber], {relativeTo: this.route});
        }
      });
    }));
    this._querySubscriptions.push(this._mediaService.registerQuery('xs').subscribe((matches: boolean) => {
      this._ngZone.runOutsideAngular(() => {
        if (matches) {
          this.router.navigate(['../../small/' + this.pageNumber], {relativeTo: this.route});
        }
      });
    }));
    this._querySubscriptions.push(this._mediaService.registerQuery('gt-sm').subscribe((matches: boolean) => {
      this._ngZone.runOutsideAngular(() => {
        if (matches) {
          this.router.navigate(['../../normal/' + this.pageNumber], {relativeTo: this.route});
        }
      });
    }));
  }

  private refreshPage(pageStyle: any, pageContent: any) {
    this.setFontSize(pageStyle);
    this.setPageContent(pageContent);
  }

  private setFontSize(pageStyle: any) {
    Object.assign(this.pageStyle, pageStyle);
  }

  private setPageContent(pageContent: any) {
    this.pageContent = pageContent;
  }

  ngOnInit() {
    console.log('init');
    this.storyName = this.route.parent.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log('story change!');
        return this.storyService.getStory(params.get('name'));
      })
    );
    this.route.paramMap.pipe(
      switchMap(async (params: ParamMap) => {
        this.pageNumber = params.get('page');
        return {
          'pageStyle': this.storyService.getFontStyle(params.get('view')),
          'pageContent': await this.storyService.paginateTo(
            await this.storyName.pipe(first()).toPromise(),
            +params.get('page'),
            params.get('view')).pipe(first()).toPromise()
        };
      })
    ).subscribe((pageConfig: any) => {
      console.log('page change!');
      this._ngZone.run(() => this.refreshPage(pageConfig['pageStyle'], pageConfig['pageContent']));
    });
    this.watchScreen();
    this.storyService.ngOnInit();
  }

  ngOnDestroy(): void {
    this._querySubscriptions.forEach(sub => sub.unsubscribe());
    this.storyService.ngOnDestroy();
  }

}
