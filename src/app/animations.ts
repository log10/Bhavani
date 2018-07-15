import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideUpAndDownAnimation =
  trigger('slideUpAndDown', [
    state('hidden', style({
      opacity: 1,
      transform: 'translateY(-100%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('hidden => visible', animate('1s ease-in-out')),
    transition('visible => hidden', animate('1.5s linear'))
  ]);
