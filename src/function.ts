export const noop = () => {};
export const identity = <T>(value: T): T => value;

export const falsify = () => false as const;
export const F = falsify;
export const truthify = () => true as const;
export const T = truthify;
export const nullify = () => null;
export const N = nullify;
export const U = () => undefined;
