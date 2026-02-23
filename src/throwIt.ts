export function throwIt(err: any, ctor?: typeof Error | null): any {
	throw err instanceof Error || ctor === null ? err : new (ctor ?? Error)(err);
}
