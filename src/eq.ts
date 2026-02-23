export function eq(y: any): (x: any) => boolean {
	return (x: any) => x === y;
}

export function neq(y: any): (x: any) => boolean {
	return (x: any) => x !== y;
}

export function lt(y: number): (x: number) => boolean {
	return (x: number) => x < y;
}

export function lte(y: number): (x: number) => boolean {
	return (x: number) => x <= y;
}

export function gt(y: number): (x: number) => boolean {
	return (x: number) => x > y;
}

export function gte(y: number): (x: number) => boolean {
	return (x: number) => x >= y;
}
