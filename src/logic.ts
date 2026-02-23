export type TAndResult<LeftResult, RightResult> = LeftResult extends null
	? LeftResult
	: LeftResult extends undefined
		? LeftResult
		: LeftResult extends false
			? LeftResult
			: LeftResult extends 0
				? LeftResult
				: LeftResult extends ''
					? LeftResult
					: RightResult;

export type TOrResult<LeftResult, RightResult> = LeftResult extends null
	? RightResult
	: LeftResult extends undefined
		? RightResult
		: LeftResult extends false
			? RightResult
			: LeftResult extends 0
				? RightResult
				: LeftResult extends ''
					? RightResult
					: LeftResult;

export function and<T, LeftResult, RightResult>(
	left: (value: T) => LeftResult,
	right: (value: T) => RightResult
) {
	return (value: T) => (left(value) && right(value)) as TAndResult<LeftResult, RightResult>;
}

export function or<T, LeftResult, RightResult>(
	left: (value: T) => LeftResult,
	right: (value: T) => RightResult
) {
	return (value: T) => (left(value) || right(value)) as TOrResult<LeftResult, RightResult>;
}

// console.assert(
// 	and(
// 		() => '' as const,
// 		() => 0 as const
// 	)(1) == ''
// );

// export function not<F extends (...args: Array<any>) => any>(
// 	fn: F
// ): (...args: Parameters<F>) => boolean {
export function not<Arg1>(fn: (arg1: Arg1) => any): (arg1: Arg1) => boolean;
export function not<Arg1, Arg2>(
	fn: (arg1: Arg1, arg2: Arg2) => any
): (arg1: Arg1, arg2: Arg2) => boolean;
export function not<Arg1, Arg2, Arg3>(
	fn: (arg1: Arg1, arg2: Arg2, arg3: Arg3) => any
): (arg1: Arg1, arg2: Arg2, arg3: Arg3) => boolean;
export function not<Arg1, Arg2, Arg3, Arg4>(
	fn: (arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4) => any
): (arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4) => boolean;
export function not<Arg1, Arg2, Arg3, Arg4, Arg5>(
	fn: (arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5) => any
): (arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5) => boolean;
export function not<Arg1, Arg2, Arg3, Arg4, Arg5, Arg6>(
	fn: (arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6) => any
): (arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6) => boolean;
export function not<Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7>(
	fn: (arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6, arg7: Arg7) => any
): (arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4, arg5: Arg5, arg6: Arg6, arg7: Arg7) => boolean;
export function not<Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8>(
	fn: (
		arg1: Arg1,
		arg2: Arg2,
		arg3: Arg3,
		arg4: Arg4,
		arg5: Arg5,
		arg6: Arg6,
		arg7: Arg7,
		arg8: Arg8
	) => any
): (
	arg1: Arg1,
	arg2: Arg2,
	arg3: Arg3,
	arg4: Arg4,
	arg5: Arg5,
	arg6: Arg6,
	arg7: Arg7,
	arg8: Arg8
) => boolean;
export function not<Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9>(
	fn: (
		arg1: Arg1,
		arg2: Arg2,
		arg3: Arg3,
		arg4: Arg4,
		arg5: Arg5,
		arg6: Arg6,
		arg7: Arg7,
		arg8: Arg8,
		arg9: Arg9
	) => any
): (
	arg1: Arg1,
	arg2: Arg2,
	arg3: Arg3,
	arg4: Arg4,
	arg5: Arg5,
	arg6: Arg6,
	arg7: Arg7,
	arg8: Arg8,
	arg9: Arg9
) => boolean;
export function not<Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10>(
	fn: (
		arg1: Arg1,
		arg2: Arg2,
		arg3: Arg3,
		arg4: Arg4,
		arg5: Arg5,
		arg6: Arg6,
		arg7: Arg7,
		arg8: Arg8,
		arg9: Arg9,
		arg10: Arg10
	) => any
): (
	arg1: Arg1,
	arg2: Arg2,
	arg3: Arg3,
	arg4: Arg4,
	arg5: Arg5,
	arg6: Arg6,
	arg7: Arg7,
	arg8: Arg8,
	arg9: Arg9,
	arg10: Arg10
) => boolean;
export function not(fn: (...args: Array<any>) => any): (...args: Array<any>) => boolean {
	switch (fn.length) {
		case 0: {
			return () => !fn();
		}
		case 1: {
			return ((arg1: any) => !fn(arg1)) as any;
		}
		case 2: {
			return ((arg1: any, arg2: any) => !fn(arg1, arg2)) as any;
		}
		case 3: {
			return ((arg1: any, arg2: any, arg3: any) => !fn(arg1, arg2, arg3)) as any;
		}
		case 4: {
			return ((arg1: any, arg2: any, arg3: any, arg4: any) => !fn(arg1, arg2, arg3, arg4)) as any;
		}
		case 5: {
			return ((arg1: any, arg2: any, arg3: any, arg4: any, arg5: any) =>
				!fn(arg1, arg2, arg3, arg4, arg5)) as any;
		}
		default: {
			return (...args) => !fn(...args);
		}
	}
}
