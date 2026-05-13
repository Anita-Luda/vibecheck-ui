export const createTensor = (size: number) => new Float64Array(size);

export const addTensors = (a: Float64Array, b: Float64Array) => {
    const res = new Float64Array(a.length);
    for (let i = 0; i < a.length; i++) res[i] = a[i] + b[i];
    return res;
};
