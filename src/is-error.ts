/**
 * Check if the value is an instance of Error simplifying `value instanceof Error`
 *
 * @example
 * ```ts
 * const results = await Promise.all(
 *  [1, 2, 3].map(i => fetch('/' + i).catch(e => e))
 * );
 * const errors = results.filter(isError);
 * ```
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}
