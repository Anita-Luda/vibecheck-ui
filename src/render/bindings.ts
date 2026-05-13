import { RenderMap } from '../../contracts/renderMap';

export const bindLayout = (map: RenderMap) => {
    // Binding layout matrix to DOM nodes
    return map.layoutBindings;
};
