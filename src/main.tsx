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

const boot = () => {
  const initialU = createInitialU();
  const rootNode = createNode('root', null, initialU);
  const heap = initHeap(rootNode);
  useHeapStore.getState().setHeap(heap);
  initEventBus();
  eventDispatcher.dispatch('boot', { mode: 0, hydrate: true });
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Root />
  );
};

boot();
