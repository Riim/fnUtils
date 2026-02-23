export declare function prop<T, K extends keyof T>(name: K): (input: T | null | undefined) => typeof input extends null ? null : typeof input extends undefined ? undefined : T[K];
export declare function nnProp<T, K extends keyof T>(name: K): (input: T) => NonNullable<T[K]>;
export declare function propEq<T, K extends keyof T>(name: K, value: T[K]): (input: T | null | undefined) => boolean;
export declare function propOr<T, K extends keyof T, D>(name: K, defaultValue: D): (input: T | null | undefined) => Exclude<T[K], null | undefined> | D;
