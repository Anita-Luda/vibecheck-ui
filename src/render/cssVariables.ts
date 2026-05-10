import { useHeapStore } from '../store/heapStore';

export const injectCssVariables = (vars: Record<string, string>) => {
  const root = document.documentElement;
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  // Vision Simulation Overlays
  const head = useHeapStore.getState().getHead();
  const visionSim = head?.value.o?.visionSim || 'none';

  let filter = 'none';
  if (visionSim === 'protanopia') filter = 'grayscale(100%) sepia(10%) hue-rotate(-20deg)'; // Simple CSS approximations
  if (visionSim === 'deuteranopia') filter = 'grayscale(100%) sepia(10%) hue-rotate(20deg)';
  if (visionSim === 'tritanopia') filter = 'grayscale(100%) sepia(10%) hue-rotate(180deg)';
  if (visionSim === 'achromatopsia') filter = 'grayscale(100%)';
  if (visionSim === 'low-light') filter = 'brightness(50%) contrast(80%) saturate(70%)';

  root.style.filter = filter;
};
