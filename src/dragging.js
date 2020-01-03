import { fromEvent, interval, merge, animationFrameScheduler } from 'rxjs';
import { takeUntil, mergeMap, pairwise, map, scan, withLatestFrom, takeWhile, tap, startWith } from 'rxjs/operators'
import { pick, map as mapR, multiply, nth, values, all, compose, lt } from 'ramda';
import { AMORTIZATION, MOVE_THRESHOLD, DEFAULT_DIFF } from './constants';

const mouseMove$ = fromEvent(document, 'mousemove')
const mouseDown$ = fromEvent(document, 'mousedown')
const mouseUp$ = fromEvent(document, 'mouseup')

const mouseDrag$ = mouseDown$.pipe(
  mergeMap(() => mouseMove$.pipe(
    map(pick(['x', 'y'])),
    pairwise(),
    takeUntil(mouseUp$),
  ))
);

const animationFrame$ = interval(0, animationFrameScheduler);

export const dragging$ = mouseDrag$.pipe(
  map(([prev, current]) => {
    const { innerHeight: height, innerWidth: width } = window;

    const dX = (current.x - prev.x) / width;
    const dY = (current.y - prev.y) / height;

    return { dX, dY };
  })
);

const draggingWithDefaultOnMouseDown$ = mouseDown$.pipe(
  mergeMap(() => dragging$.pipe(startWith(DEFAULT_DIFF)))
)

const inertia$ = mouseUp$.pipe(
  withLatestFrom(draggingWithDefaultOnMouseDown$),
  map(nth(1)),
  tap((value) => console.log('Kick off inertia with: ', value)),
  mergeMap((value) => animationFrame$.pipe(
    scan(mapR(multiply(AMORTIZATION)), value),
    takeWhile(compose(all(lt(MOVE_THRESHOLD)), mapR(Math.abs), values)),
    takeUntil(mouseDown$)
  ))
)

export const inertiaDragging$ = merge(
  dragging$,
  inertia$
)
