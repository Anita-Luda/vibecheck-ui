import { eventDispatcher } from '../events/dispatcher';
import { runPipeline } from './pipeline';

export const initEventBus = () => {
  eventDispatcher.subscribe('boot', runPipeline);
  eventDispatcher.subscribe('user.input', runPipeline);
  eventDispatcher.subscribe('mode.set', runPipeline);
  eventDispatcher.subscribe('role.update', runPipeline);
  eventDispatcher.subscribe('token.update', runPipeline);
  eventDispatcher.subscribe('preset.set', runPipeline);
};
