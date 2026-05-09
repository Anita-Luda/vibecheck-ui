import { E } from '../events/types';
import { rootReducer } from '../reducers';
import { useHeapStore } from '../store/heapStore';
import { computeKernel } from '../kernel/signalKernel';
import { mapUToRenderMap } from '../compiler/mapper';
import { render } from '../render/renderer';
import { useEventStore } from '../store/eventStore';

export const runPipeline = (e: E) => {
  const heapStore = useHeapStore.getState();
  const eventStore = useEventStore.getState();
  const currentHeap = heapStore.heap;

  if (!currentHeap) return;

  eventStore.addEvent(e);

  const nextHeap = rootReducer(e, currentHeap);
  heapStore.setHeap(nextHeap);

  const head = nextHeap.nodes.get(nextHeap.head)!;
  computeKernel(head.value);
  const renderMap = mapUToRenderMap(head.value);
  render(renderMap);
};
