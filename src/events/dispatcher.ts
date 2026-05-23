import { E, EType, EPayload } from '../../contracts/events';

type Handler = (e: E) => void;

class EventDispatcher {
  private handlers: Map<string, Handler[]> = new Map();

  subscribe(type: EType, handler: Handler) {
    if (!this.handlers.has(type)) {
      this.handlers.set(type, []);
    }
    this.handlers.get(type)!.push(handler);
  }

  dispatch(type: EType, payload: EPayload) {
    const event: E = { type, payload } as E;
    const list = this.handlers.get(type) || [];
    list.forEach(h => h(event));
  }
}

export const eventDispatcher = new EventDispatcher();
