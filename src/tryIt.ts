export function tryIt<T, D = T | null>(fn: () => T, defaultResult?: D) {
	try {
		return [null, fn()] as [error: null, result: T];
	} catch (err) {
		return [err, defaultResult ?? null] as [error: any, result: D];
	}
}

export async function tryItAsync<T, D = T | null>(fn: () => Promise<T>, defaultResult?: D) {
	try {
		return [null, await fn()] as [error: null, result: T];
	} catch (err) {
		return [err, defaultResult ?? null] as [error: any, result: D];
	}
}

// export function tryItAsync<T, D = T | null>(fn: () => Promise<T>, defaultResult?: D) {
// 	return fn().then(
// 		(result) => [null, result] as [error: null, result: T],
// 		(err) => [err, defaultResult ?? null] as [error: any, result: D]
// 	);
// }
