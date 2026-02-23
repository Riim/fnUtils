export function prop<T, K extends keyof T>(
	name: K
): (
	input: T | null | undefined
) => typeof input extends null ? null : typeof input extends undefined ? undefined : T[K] {
	return (input) => (input as any)?.[name];
}

// prop<number, 'toString'>('toString')(1);

export function nnProp<T, K extends keyof T>(name: K): (input: T) => NonNullable<T[K]> {
	// eslint-disable-next-line
	return (input) => input[name]!;
}

export function propEq<T, K extends keyof T>(name: K, value: T[K]) {
	return (input: T | null | undefined) => input != null && input[name] === value;
}

export function propOr<T, K extends keyof T, D>(
	name: K,
	defaultValue: D
): (input: T | null | undefined) => Exclude<T[K], null | undefined> | D {
	return (input) => (input as any)?.[name] ?? defaultValue;
}
