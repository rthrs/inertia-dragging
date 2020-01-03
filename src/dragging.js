import { fromEvent, interval, merge, animationFrameScheduler } from 'rxjs';
import { takeUntil, mergeMap, pairwise, map, scan, withLatestFrom, takeWhile, tap, startWith, filter } from 'rxjs/operators';
import { map as mapR, multiply, nth, values, all, compose, lt } from 'ramda';
import { AMORTIZATION, MOVE_THRESHOLD, DEFAULT_DIFF } from './constants';

const mouseDown$ = merge(
  fromEvent(document, 'mousedown'),
  fromEvent(document, 'touchstart')
);

const pickClientDimensions = ({ clientX: x, clientY: y }) => ({ x, y });

const mouseMove$ = merge(
  fromEvent(document, 'mousemove').pipe(
    map(pickClientDimensions)
  ),
  fromEvent(document, 'touchmove').pipe(
    map((event) => event.changedTouches[0]),
    map(pickClientDimensions)
  )
);

const mouseUp$ = merge(
  fromEvent(document, 'mouseup'),
  fromEvent(document, 'touchend')
);

const mouseDrag$ = mouseDown$.pipe(
  mergeMap(() => mouseMove$.pipe(
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
);

const allPassMoveThreshold = compose(all(lt(MOVE_THRESHOLD)), mapR(Math.abs), values);

const inertia$ = mouseUp$.pipe(
  withLatestFrom(draggingWithDefaultOnMouseDown$),
  map(nth(1)),
  filter(allPassMoveThreshold),
  tap((value) => console.log('Kick off inertia with: ', value)),
  mergeMap((value) => animationFrame$.pipe(
    scan(mapR(multiply(AMORTIZATION)), value),
    takeWhile(allPassMoveThreshold),
    takeUntil(mouseDown$)
  ))
);

export const inertiaDragging$ = merge(
  dragging$,
  inertia$
);
