import { WrappedError } from "./mod.ts";

/**
 * Ensures that a value is an instance of `Error` by creating a {@link WrappedError} if it's not. See also `returnError`.
 *
 * @example
 * ```ts
 * const forceErrorHandling = (): void | Error => {
 *   try {
 *     return unsafeThrowingFunction();
 *   } catch (error) {
 *     return ensureError(error); // Ensures the value is an Error
 *   }
 * }
 * ```
 */
export function ensureError(value: unknown): Error {
  return value instanceof Error ? value : new WrappedError(value);
}
