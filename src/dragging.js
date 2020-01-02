import { fromEvent } from 'rxjs';
import { takeUntil, mergeMap, pairwise, map } from 'rxjs/operators'
import { pick, map as mapR } from 'ramda';

const mouseMove$ = fromEvent(document, 'mousemove')
const mouseDown$ = fromEvent(document, 'mousedown')
const mouseUp$ = fromEvent(document, 'mouseup')

export const mousePairwiseDrag$ = mouseDown$.pipe(
  mergeMap(() => mouseMove$.pipe(
    pairwise(),
    takeUntil(mouseUp$))
  )
);

export const dragTranslate$ = mousePairwiseDrag$.pipe(
  map(mapR(pick(['x', 'y']))),
  map(([prev, current]) => {
    const { innerHeight: height, innerWidth: width } = window;

    const dX = (current.x - prev.x) / width;
    const dY = (current.y - prev.y) / height;

    return { dX, dY };
  }),
);
