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
      map(event => {
        const width = event.target['clientWidth'];
        let direction = 0;
        if (width * 0.4 >= event.clientX) {
          direction--;
        } else if (width * 0.6 <= event.clientX) {
          direction++;
        }
        return direction;
      })
    ).subscribe(direction => this.pageService.go(direction));
  }
}
