import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of, from, EMPTY  } from 'rxjs';
import { map, filter, first, publishReplay, refCount } from 'rxjs/operators';

import { default as STORIES_LIST } from '../../../assets/stories/storiesList.json';

const CHARS_PER_PAGE = {
  normal: 200,
  medium: 1000,
  small: 50
};
const CHAR_SIZE = {
  normal: '1.9vw',
  medium: '3vw',
  small: '4.9vw'
};
const FONT_STYLE = {
  normal: {'font-size': CHAR_SIZE.normal},
  medium: {'font-size': CHAR_SIZE.medium},
  small: {'font-size': CHAR_SIZE.small}
};

export class Story {
  constructor(
    public title: string,
    public content: string,
    public paginated: any
  ) {}
}

@Injectable()
export class StoryService implements OnInit, OnDestroy {
  stories = {};
  dummyDiv: any;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  getStories() { return JSON.parse(STORIES_LIST); }

  getStory(name: string) {
    if (!this.stories[name]) {
      this.stories[name] = from(import('../../../assets/stories/' + name + '.json')).pipe(
        map(story => JSON.parse(story.toString())),
        publishReplay(1),
        refCount()
      );
    }
    return this.stories[name].pipe(map(() => name));
  }

  pageCount(storyName: string, view: string) {
    return this.stories[storyName].pipe(
      map((story: Story) => story.paginated[view].length)
    );
  }

  paginateTo(storyName: string, page: number, view: string) {
    if (page < 1) {
      return EMPTY;
    }
    return this.stories[storyName].pipe(
      map((story: Story) => this.preProcess(story, view)),
      map((story: Story) => {
        let pageContent;
        if (!story || story.paginated[view].length === 0) {
          pageContent = '';
        } else if (story.paginated[view].length < page) {
          pageContent = story.paginated[view][story.paginated[view].length - 1];
        } else {
          pageContent = story.paginated[view][page - 1];
        }
        return this.sanitizer.bypassSecurityTrustHtml(pageContent);
      })
    );
  }

  private addPageContents(parts: Array<string>, view: string) {
    const pages = [];
    for (let i = 0; i < parts.length; i++) {
      let thisPageContent = '';
      for (; i < parts.length; i++) {
        const shallWeAddThis = thisPageContent + ' ' + parts[i];
        if (parts[i].match(/(<div style="text-align: center">)|(<\/div>)/g) === null
          && this.checkOverFlow(shallWeAddThis, FONT_STYLE[view])) {
          break;
        }
        thisPageContent = shallWeAddThis;
      }
      i--;
      pages.push(thisPageContent);
    }
    return pages;
  }

  private preProcess(story: Story, view: string) {
    if (story.paginated[view].length === 0) {
      const htmlContent = story.content
        .replace(/\t/g, '&emsp;&emsp;')
        .replace(/<c>/gi, '<div style="text-align: center">')
        .replace(/<\/c>/gi, '</div>')
        .replace(/(\n)|(\n\r)/g, ' <br> ');
      const parts = htmlContent.split(' ');
      story.paginated[view] = this.addPageContents(parts, view);
      console.log(story.paginated);
    }
    return story;
  }

  getFontStyle(view: string) {
    return FONT_STYLE[view];
  }

  private setupDummyDiv() {
    this.dummyDiv = document.createElement('div');
    document.body.appendChild(this.dummyDiv);
    Object.assign(this.dummyDiv.style, {
      'position': 'fixed',
      'top': '100vh',
      'width': '97vw',
      'height': '97vh',
      'color': 'red'
    });
  }

  private destroyDummyDiv() {
    document.body.removeChild(this.dummyDiv);
    this.dummyDiv = null;
  }

  private checkOverFlow(content, style) {
      Object.assign(this.dummyDiv.style, style);
      this.dummyDiv.innerHTML = this.sanitizer.bypassSecurityTrustHtml(content)['changingThisBreaksApplicationSecurity'];
      return this.dummyDiv.offsetHeight < this.dummyDiv.scrollHeight;
  }

  ngOnInit() {
    this.setupDummyDiv();
  }

  ngOnDestroy(): void {
    this.destroyDummyDiv();
  }

}
