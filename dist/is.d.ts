type PickFalsy<T> = (false extends T ? false : never) | (0 extends T ? 0 : never) | ('' extends T ? '' : never) | (null extends T ? null : never) | (undefined extends T ? undefined : never);
export declare function isFalsy<T>(value: T): value is PickFalsy<T>;
export declare function isTruthy<T>(value: T): value is Exclude<T, false | 0 | '' | null | undefined>;
export {};
