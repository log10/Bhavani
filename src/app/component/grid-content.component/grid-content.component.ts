
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bv-grid-content',
  templateUrl: './grid-content.component.pug',
  styleUrls: ['./grid-content.component.scss']
})
export class GridContentComponent {
  @Input() content = 'கதை';
  constructor() {}
}
