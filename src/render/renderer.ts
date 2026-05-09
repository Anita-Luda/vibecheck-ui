import { RenderMap } from '../../contracts/abi';
import { injectCssVariables } from './cssVariables';

export const render = (renderMap: RenderMap) => {
  injectCssVariables(renderMap.cssVars);
};
