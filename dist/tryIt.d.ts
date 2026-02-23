export declare function tryIt<T, D = T | null>(fn: () => T, defaultResult?: D): [error: null, result: T] | [error: any, result: D];
export declare function tryItAsync<T, D = T | null>(fn: () => Promise<T>, defaultResult?: D): Promise<[error: null, result: T] | [error: any, result: D]>;
