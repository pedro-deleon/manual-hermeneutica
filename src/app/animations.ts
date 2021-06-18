import { trigger, transition, query, style, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
    transition('* => *', [
        query(
            ':enter', [style({ position: 'absolute', opacity: 0, maxWidth: '1000px' })],
            { optional: true }
        ),
        query(
            ':leave', [style({ position: 'absolute', opacity: 1, maxWidth: '1000px' }), animate('200ms', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter', [style({ position: 'absolute', opacity: 0, maxWidth: '1000px' }), animate('500ms', style({ opacity: 1 }))],
            { optional: true }
        )
    ])
]);