import { E, EventType } from './types';

type EventHandler = (event: E) => void;

class EventDispatcher {
  private handlers: Map<EventType, Set<EventHandler>> = new Map();

  subscribe(type: EventType, handler: EventHandler) {
    if (!this.handlers.has(type)) {
      this.handlers.set(type, new Set());
    }
    this.handlers.get(type)!.add(handler);
    return () => this.handlers.get(type)!.delete(handler);
  }

  dispatch(type: EventType, payload: any) {
    const event: E = {
      type,
      payload,
      timestamp: Date.now(),
    };

    this.handlers.get(type)?.forEach(handler => handler(event));
    this.handlers.get('boot')?.forEach(handler => {
        if(type !== 'boot') handler(event);
    });
  }
}

export const eventDispatcher = new EventDispatcher();
