import { Component, HostListener, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { PageService } from '../../service/story.service/page.service';

@Component({
  selector: 'bv-reader',
  templateUrl: './reader.component.pug',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {
  private onClickSource = new Subject<any>();
  private clicks = this.onClickSource.asObservable();

  constructor(
    private pageService: PageService,
  ) {}

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    this.onClickSource.next(event);
  }

  ngOnInit() {
    this.clicks.pipe(
      map(event => ((event.target['clientWidth'] / 2) >= event.clientX) ? -1 : 1)
    ).subscribe(direction => this.pageService.go(direction));
  }
}
