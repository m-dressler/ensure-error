import { ensureError } from "./ensure-error.ts";

/**
 * Ensures that a function doesn't throw Error by returning them instead
 *
 * @example
 * ```ts
 * const safeFetch = returnError(fetch);
 *
 * const result = await safeFetch("https://example.com");
 * // We can now enforce type safe exception handling
 * console.log(isError(result) ? "Network error: " + result.message :  "Response Status: " + result.status);
 * ```
 */
// deno-lint-ignore no-explicit-any
export function returnError<T extends (...args: any[]) => any>(
  fn: T,
): (
  ...args: Parameters<T>
) => ReturnType<T> extends Promise<infer R> ? Promise<Error | R>
  : Error | ReturnType<T> {
  return (...args: Parameters<T>) => {
    try {
      const result = fn(...args);
      return result instanceof Promise
        ? (result.catch(ensureError) as Promise<Error | Awaited<ReturnType<T>>>)
        : result;
    } catch (error) {
      return ensureError(error);
    }
  };
}
