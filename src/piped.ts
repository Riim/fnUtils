export function piped<Input, Output1>(input: Input, fn1: (input: Input) => Output1): Output1;
export function piped<Input, Output1, Output2>(
	input: Input,
	fn1: (input: Input) => Output1,
	fn2: (input: Output1) => Output2
): Output2;
export function piped<Input, Output1, Output2, Output3>(
	input: Input,
	fn1: (input: Input) => Output1,
	fn2: (input: Output1) => Output2,
	fn3: (input: Output2) => Output3
): Output3;
export function piped<Input, Output1, Output2, Output3, Output4>(
	input: Input,
	fn1: (input: Input) => Output1,
	fn2: (input: Output1) => Output2,
	fn3: (input: Output2) => Output3,
	fn4: (input: Output3) => Output4
): Output4;
export function piped<Input, Output1, Output2, Output3, Output4, Output5>(
	input: Input,
	fn1: (input: Input) => Output1,
	fn2: (input: Output1) => Output2,
	fn3: (input: Output2) => Output3,
	fn4: (input: Output3) => Output4,
	fn5: (input: Output4) => Output5
): Output5;
export function piped<Input, Output1, Output2, Output3, Output4, Output5, Output6>(
	input: Input,
	fn1: (input: Input) => Output1,
	fn2: (input: Output1) => Output2,
	fn3: (input: Output2) => Output3,
	fn4: (input: Output3) => Output4,
	fn5: (input: Output4) => Output5,
	fn6: (input: Output5) => Output6
): Output6;
export function piped<Input, Output1, Output2, Output3, Output4, Output5, Output6, Output7>(
	input: Input,
	fn1: (input: Input) => Output1,
	fn2: (input: Output1) => Output2,
	fn3: (input: Output2) => Output3,
	fn4: (input: Output3) => Output4,
	fn5: (input: Output4) => Output5,
	fn6: (input: Output5) => Output6,
	fn7: (input: Output6) => Output7
): Output7;
export function piped<
	Input,
	Output1,
	Output2,
	Output3,
	Output4,
	Output5,
	Output6,
	Output7,
	Output8
>(
	input: Input,
	fn1: (input: Input) => Output1,
	fn2: (input: Output1) => Output2,
	fn3: (input: Output2) => Output3,
	fn4: (input: Output3) => Output4,
	fn5: (input: Output4) => Output5,
	fn6: (input: Output5) => Output6,
	fn7: (input: Output6) => Output7,
	fn8: (input: Output7) => Output8
): Output8;
export function piped<
	Input,
	Output1,
	Output2,
	Output3,
	Output4,
	Output5,
	Output6,
	Output7,
	Output8,
	Output9
>(
	input: Input,
	fn1: (input: Input) => Output1,
	fn2: (input: Output1) => Output2,
	fn3: (input: Output2) => Output3,
	fn4: (input: Output3) => Output4,
	fn5: (input: Output4) => Output5,
	fn6: (input: Output5) => Output6,
	fn7: (input: Output6) => Output7,
	fn8: (input: Output7) => Output8,
	fn9: (input: Output8) => Output9
): Output9;
export function piped<
	Input,
	Output1,
	Output2,
	Output3,
	Output4,
	Output5,
	Output6,
	Output7,
	Output8,
	Output9,
	Output10
>(
	input: Input,
	fn1: (input: Input) => Output1,
	fn2: (input: Output1) => Output2,
	fn3: (input: Output2) => Output3,
	fn4: (input: Output3) => Output4,
	fn5: (input: Output4) => Output5,
	fn6: (input: Output5) => Output6,
	fn7: (input: Output6) => Output7,
	fn8: (input: Output7) => Output8,
	fn9: (input: Output8) => Output9,
	fn10: (input: Output9) => Output10
): Output10;
export function piped(input: any, ...fns: Array<Function>) {
	let result = fns[0](input);

	for (let i = 1, l = fns.length; i < l; i++) {
		result = fns[i](result);
	}

	return result;
}

export function pipedAsync<Input, Output1>(
	input: Input,
	fn1: (input: Awaited<Input>) => Output1
): Promise<Output1>;
export function pipedAsync<Input, Output1, Output2>(
	input: Input,
	fn1: (input: Awaited<Input>) => Output1,
	fn2: (input: Awaited<Output1>) => Output2
): Promise<Output2>;
export function pipedAsync<Input, Output1, Output2, Output3>(
	input: Input,
	fn1: (input: Awaited<Input>) => Output1,
	fn2: (input: Awaited<Output1>) => Output2,
	fn3: (input: Awaited<Output2>) => Output3
): Promise<Output3>;
export function pipedAsync<Input, Output1, Output2, Output3, Output4>(
	input: Input,
	fn1: (input: Awaited<Input>) => Output1,
	fn2: (input: Awaited<Output1>) => Output2,
	fn3: (input: Awaited<Output2>) => Output3,
	fn4: (input: Awaited<Output3>) => Output4
): Promise<Output4>;
export function pipedAsync<Input, Output1, Output2, Output3, Output4, Output5>(
	input: Input,
	fn1: (input: Awaited<Input>) => Output1,
	fn2: (input: Awaited<Output1>) => Output2,
	fn3: (input: Awaited<Output2>) => Output3,
	fn4: (input: Awaited<Output3>) => Output4,
	fn5: (input: Awaited<Output4>) => Output5
): Promise<Output5>;
export function pipedAsync<Input, Output1, Output2, Output3, Output4, Output5, Output6>(
	input: Input,
	fn1: (input: Awaited<Input>) => Output1,
	fn2: (input: Awaited<Output1>) => Output2,
	fn3: (input: Awaited<Output2>) => Output3,
	fn4: (input: Awaited<Output3>) => Output4,
	fn5: (input: Awaited<Output4>) => Output5,
	fn6: (input: Awaited<Output5>) => Output6
): Promise<Output6>;
export function pipedAsync<Input, Output1, Output2, Output3, Output4, Output5, Output6, Output7>(
	input: Input,
	fn1: (input: Awaited<Input>) => Output1,
	fn2: (input: Awaited<Output1>) => Output2,
	fn3: (input: Awaited<Output2>) => Output3,
	fn4: (input: Awaited<Output3>) => Output4,
	fn5: (input: Awaited<Output4>) => Output5,
	fn6: (input: Awaited<Output5>) => Output6,
	fn7: (input: Awaited<Output6>) => Output7
): Promise<Output7>;
export function pipedAsync<
	Input,
	Output1,
	Output2,
	Output3,
	Output4,
	Output5,
	Output6,
	Output7,
	Output8
>(
	input: Input,
	fn1: (input: Awaited<Input>) => Output1,
	fn2: (input: Awaited<Output1>) => Output2,
	fn3: (input: Awaited<Output2>) => Output3,
	fn4: (input: Awaited<Output3>) => Output4,
	fn5: (input: Awaited<Output4>) => Output5,
	fn6: (input: Awaited<Output5>) => Output6,
	fn7: (input: Awaited<Output6>) => Output7,
	fn8: (input: Awaited<Output7>) => Output8
): Promise<Output8>;
export function pipedAsync<
	Input,
	Output1,
	Output2,
	Output3,
	Output4,
	Output5,
	Output6,
	Output7,
	Output8,
	Output9
>(
	input: Input,
	fn1: (input: Awaited<Input>) => Output1,
	fn2: (input: Awaited<Output1>) => Output2,
	fn3: (input: Awaited<Output2>) => Output3,
	fn4: (input: Awaited<Output3>) => Output4,
	fn5: (input: Awaited<Output4>) => Output5,
	fn6: (input: Awaited<Output5>) => Output6,
	fn7: (input: Awaited<Output6>) => Output7,
	fn8: (input: Awaited<Output7>) => Output8,
	fn9: (input: Awaited<Output8>) => Output9
): Promise<Output9>;
export function pipedAsync<
	Input,
	Output1,
	Output2,
	Output3,
	Output4,
	Output5,
	Output6,
	Output7,
	Output8,
	Output9,
	Output10
>(
	input: Input,
	fn1: (input: Awaited<Input>) => Output1,
	fn2: (input: Awaited<Output1>) => Output2,
	fn3: (input: Awaited<Output2>) => Output3,
	fn4: (input: Awaited<Output3>) => Output4,
	fn5: (input: Awaited<Output4>) => Output5,
	fn6: (input: Awaited<Output5>) => Output6,
	fn7: (input: Awaited<Output6>) => Output7,
	fn8: (input: Awaited<Output7>) => Output8,
	fn9: (input: Awaited<Output8>) => Output9,
	fn10: (input: Awaited<Output9>) => Output10
): Promise<Output10>;
export async function pipedAsync(input: any, ...fns: Array<Function>) {
	let result = fns[0](input instanceof Promise ? await input : input);

	for (let i = 1, l = fns.length; i < l; i++) {
		result = fns[i](input instanceof Promise ? await input : input);
	}

	return result;
}
