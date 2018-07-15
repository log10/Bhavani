
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TdMediaService } from '@covalent/core/media';

@Component({
  selector: 'bv-grid-content',
  templateUrl: './grid-content.component.pug',
  styleUrls: ['./grid-content.component.scss']
})
export class GridContentComponent {
  @Input() content;

  constructor(
    private _mediaService: TdMediaService,
    private router: Router
  ) {}

  getView() {
    let view = 'normal';
    if (this._mediaService.query('sm')) {
      view = 'medium';
    } else if (this._mediaService.query('xs')) {
      view = 'small';
    }
    return view;
  }

  gotoStory() {
    this.router.navigate(['/story/' + this.content.id + '/' + this.getView() + '/1']);
  }

}
