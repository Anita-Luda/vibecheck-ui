import { E } from '../events/types';
import { Heap } from '../../contracts/heap';
import { tokenReducer } from './tokenReducer';
import { roleReducer } from './roleReducer';
import { modeReducer } from './modeReducer';
import { layoutReducer } from './layoutReducer';
import { presetReducer } from './presetReducer';

export const rootReducer = (e: E, h: Heap): Heap => {
  let nextHeap = h;
  nextHeap = tokenReducer(e, nextHeap);
  nextHeap = roleReducer(e, nextHeap);
  nextHeap = modeReducer(e, nextHeap);
  nextHeap = layoutReducer(e, nextHeap);
  nextHeap = presetReducer(e, nextHeap);
  return nextHeap;
};
