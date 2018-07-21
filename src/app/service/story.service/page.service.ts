import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PageService {
  private goToSource = new Subject<number>();
  goTo = this.goToSource.asObservable();

  constructor() {}

  go(direction: number) {
    this.goToSource.next(direction);
  }
}
