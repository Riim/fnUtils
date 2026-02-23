Object.defineProperty(exports, Symbol.toStringTag, {
  value: 'Module'
});

//#region src/eq.ts
function eq(y) {
  return x => x === y;
}
function neq(y) {
  return x => x !== y;
}
function lt(y) {
  return x => x < y;
}
function lte(y) {
  return x => x <= y;
}
function gt(y) {
  return x => x > y;
}
function gte(y) {
  return x => x >= y;
}

//#endregion
//#region src/function.ts
var noop = () => {};
var identity = value => value;
var falsify = () => false;
var F = falsify;
var truthify = () => true;
var T = truthify;
var nullify = () => null;
var N = nullify;
var U = () => void 0;

//#endregion
//#region src/is.ts
function isFalsy(value) {
  return !value;
}
function isTruthy(value) {
  return !!value;
}

//#endregion
//#region src/logic.ts
function and(left, right) {
  return value => left(value) && right(value);
}
function or(left, right) {
  return value => left(value) || right(value);
}
function not(fn) {
  switch (fn.length) {
    case 0:
      return () => !fn();
    case 1:
      return arg1 => !fn(arg1);
    case 2:
      return (arg1, arg2) => !fn(arg1, arg2);
    case 3:
      return (arg1, arg2, arg3) => !fn(arg1, arg2, arg3);
    case 4:
      return (arg1, arg2, arg3, arg4) => !fn(arg1, arg2, arg3, arg4);
    case 5:
      return (arg1, arg2, arg3, arg4, arg5) => !fn(arg1, arg2, arg3, arg4, arg5);
    default:
      return (...args) => !fn(...args);
  }
}

//#endregion
//#region src/piped.ts
function piped(input, ...fns) {
  var result = fns[0](input);
  for (var i = 1, l = fns.length; i < l; i++) result = fns[i](result);
  return result;
}
async function pipedAsync(input, ...fns) {
  var result = fns[0](input instanceof Promise ? await input : input);
  for (var i = 1, l = fns.length; i < l; i++) result = fns[i](input instanceof Promise ? await input : input);
  return result;
}

//#endregion
//#region src/prop.ts
function prop(name) {
  return input => input?.[name];
}
function nnProp(name) {
  return input => input[name];
}
function propEq(name, value) {
  return input => input != null && input[name] === value;
}
function propOr(name, defaultValue) {
  return input => input?.[name] ?? defaultValue;
}

//#endregion
//#region src/throwIt.ts
function throwIt(err, ctor) {
  throw err instanceof Error || ctor === null ? err : new (ctor ?? Error)(err);
}

//#endregion
//#region src/tryIt.ts
function tryIt(fn, defaultResult) {
  try {
    return [null, fn()];
  } catch (err) {
    return [err, defaultResult ?? null];
  }
}
async function tryItAsync(fn, defaultResult) {
  try {
    return [null, await fn()];
  } catch (err) {
    return [err, defaultResult ?? null];
  }
}

//#endregion
exports.F = F;
exports.N = N;
exports.T = T;
exports.U = U;
exports.and = and;
exports.eq = eq;
exports.falsify = falsify;
exports.gt = gt;
exports.gte = gte;
exports.identity = identity;
exports.isFalsy = isFalsy;
exports.isTruthy = isTruthy;
exports.lt = lt;
exports.lte = lte;
exports.neq = neq;
exports.nnProp = nnProp;
exports.noop = noop;
exports.not = not;
exports.nullify = nullify;
exports.or = or;
exports.piped = piped;
exports.pipedAsync = pipedAsync;
exports.prop = prop;
exports.propEq = propEq;
exports.propOr = propOr;
exports.throwIt = throwIt;
exports.truthify = truthify;
exports.tryIt = tryIt;
exports.tryItAsync = tryItAsync;