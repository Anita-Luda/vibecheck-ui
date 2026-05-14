import { U } from '../../contracts/abi';

export const computeHierarchyHeuristic = (u: U) => {
  const lattice = Array.from(u.t.color.lattice);
  const luminance = lattice.filter((_, i) => i % 3 === 0);
  const chroma = lattice.filter((_, i) => i % 3 === 1);
  const avgL = luminance.reduce((a, b) => a + b, 0) / (luminance.length || 1);
  const avgC = chroma.reduce((a, b) => a + b, 0) / (chroma.length || 1);

  return {
    contrastDistribution: avgL,
    chromaIntensity: avgC,
    visualIsolation: Array.from(u.r.map).reduce((a, b) => a + (b > 0 ? 1 : 0), 0) / u.r.size
  };
};
