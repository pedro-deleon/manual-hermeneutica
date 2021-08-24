import { trigger, transition, query, style, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition('* => *', [
    query(
      ':enter', [style({ position: 'absolute', opacity: 0 })], { optional: true }
    ),
    query(
      ':leave', [style({ position: 'absolute', opacity: 1 }), animate('200ms', style({ opacity: 0 }))], { optional: true }
    )
  ])
]);
