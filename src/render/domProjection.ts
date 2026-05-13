import { RenderMap } from '../../contracts/renderMap';

export const projectToDOM = (map: RenderMap) => {
    const root = document.documentElement;
    Object.entries(map.cssVars).forEach(([key, val]) => {
        root.style.setProperty(key, val);
    });
};
