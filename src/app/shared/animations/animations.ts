import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
  state(
    'any',
    style({
      transform: 'scaleY(1)',
      opacity: 1,
    })
  ),
  state(
    'void',
    style({
      height: '0px',
      transform: 'scaleY(0)',
      opacity: 0,
    })
  ),
  transition('void <=> *', [animate('0.6s ease')]),
]);
