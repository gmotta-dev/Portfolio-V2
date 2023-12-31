
export type TInferStylizationKeys<T> = {
  [K in keyof T]: keyof T[K];
};


export type TInferStylizationValues<T> = {
  [K in keyof T]: T[K][keyof T[K]];
};