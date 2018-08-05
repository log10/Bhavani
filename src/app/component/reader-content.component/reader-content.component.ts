
import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, Observable, of, from } from 'rxjs';
import { switchMap, first, filter, map, publishReplay, refCount } from 'rxjs/operators';
import { TdMediaService } from '@covalent/core/media';

import { StoryService, Story } from '../../service/story.service/story.service';
import { PageService } from '../../service/story.service/page.service';

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
  spinner = true;

  private _querySubscriptions: Subscription[];
  private storyName: Observable<any>;
  private view: string;

  constructor(
    private _mediaService: TdMediaService,
    private route: ActivatedRoute,
    private router: Router,
    private _ngZone: NgZone,
    private storyService: StoryService,
    private pageService: PageService,
    private sanitizer: DomSanitizer
  ) {}

  goTo(pageToGo: number) {
    this.router.navigate(['../' + pageToGo], {relativeTo: this.route, replaceUrl: true});
  }

  watchScreen(): void {
    this._querySubscriptions = [];
    this._querySubscriptions.push(this._mediaService.registerQuery('sm').subscribe((matches: boolean) => {
      this._ngZone.runOutsideAngular(() => {
        if (matches) {
          this.view = 'medium';
          this.router.navigate(['../../medium/' + this.pageNumber], {relativeTo: this.route, replaceUrl: true});
        }
      });
    }));
    this._querySubscriptions.push(this._mediaService.registerQuery('xs').subscribe((matches: boolean) => {
      this._ngZone.runOutsideAngular(() => {
        if (matches) {
          this.view = 'small';
          this.router.navigate(['../../small/' + this.pageNumber], {relativeTo: this.route, replaceUrl: true});
        }
      });
    }));
    this._querySubscriptions.push(this._mediaService.registerQuery('gt-sm').subscribe((matches: boolean) => {
      this._ngZone.runOutsideAngular(() => {
        if (matches) {
          this.view = 'normal';
          this.router.navigate(['../../normal/' + this.pageNumber], {relativeTo: this.route, replaceUrl: true});
        }
      });
    }));
  }

  private refreshPage(pageStyle: any, pageContent: any) {
    this.setFontSize(pageStyle);
    this.setPageContent(pageContent);
    this.spinner = false;
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
      }),
      publishReplay(1),
      refCount()
    );
    this.route.paramMap.pipe(
      filter((params: ParamMap) => +params.get('page') > 0),
      switchMap(async (params: ParamMap) => {
        this.pageNumber = params.get('page');
        const storyName = await this.storyName.pipe(first()).toPromise();
        this.pageService.setLastPage(storyName, this.pageNumber);
        this._ngZone.run(() => this.spinner = true);
        return {
          'pageStyle': this.storyService.getFontStyle(params.get('view')),
          'pageContent': await this.storyService.paginateTo(
            storyName,
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
    this.pageService.goTo.pipe(
      filter((direction: number) => direction !== 0),
      map((direction: number) => +this.pageNumber + direction),
      switchMap(async (pageToGo: number) => {
        const pageCount = await this.storyService.pageCount(
          await this.storyName.pipe(first()).toPromise(),
          this.view).pipe(first()).toPromise();
        return (pageToGo <= 0 || pageToGo > pageCount) ? 0 : pageToGo;
      }),
      filter((pageToGo: number) => pageToGo !== 0)
    ).subscribe((direction: number) => this.goTo(direction));
  }

  ngOnDestroy(): void {
    this._querySubscriptions.forEach(sub => sub.unsubscribe());
    this.storyService.ngOnDestroy();
  }

}
