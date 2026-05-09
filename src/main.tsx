import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './ui/Root';
import { initEventBus } from './runtime/eventBus';
import { useHeapStore } from './store/heapStore';
import { initHeap } from './heap/heap';
import { createNode } from './heap/node';
import { createInitialU } from './runtime/types';
import { eventDispatcher } from './events/dispatcher';

import './styles/base.css';
import './styles/tailwind_shim.css';

/**
 * BOOT SEQUENCE (HARD ORDER)
 * 1. initHeap()
 * 2. createRootNode()
 * 3. attachStore() (implicit via useHeapStore.getState().setHeap)
 * 4. initEventBus()
 * 5. mountReducerGraph() (implicit in eventBus initialization)
 * 6. initKernel() (implicit in pipeline/executor)
 * 7. initCompiler() (implicit in mapper)
 * 8. initRenderer() (implicit in Root/App rendering)
 * 9. dispatchBootEvent()
 * 10. startRuntimeLoop()
 */
const boot = async () => {
  // 1 & 2 & 3
  const initialU = createInitialU();
  const rootNode = createNode('root', null, initialU);
  const heap = initHeap(rootNode);
  useHeapStore.getState().setHeap(heap);

  // 4 & 5
  initEventBus();

  // 9
  eventDispatcher.dispatch('boot', { mode: 0, hydrate: true });

  // 8 & 10 (via React render and internal state loops)
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
};

boot();
