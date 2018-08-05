import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PageService {
  private goToSource = new Subject<number>();
  goTo = this.goToSource.asObservable();

  private lastPage = {};

  constructor() {}

  go(direction: number) {
    this.goToSource.next(direction);
  }

  getLastPage(story) {
    return this.lastPage[story];
  }

  setLastPage(story, lastPage) {
    this.lastPage[story] = lastPage;
  }
}
