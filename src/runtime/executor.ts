import { E } from '../../contracts/events';
import { Heap } from '../../contracts/heap';
import { rootReducer as reducer } from '../reducers';

export const executeEvent = (e: E, heap: Heap): Heap => {
    // E -> R -> H execution
    return reducer(e, heap);
};
