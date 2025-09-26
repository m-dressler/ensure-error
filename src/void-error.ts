/**
 * Converts an `Error` to `undefined`, otherwise returns the value.
 *
 * @example
 * ```ts
 * const result: User[] | Error = await fetchUsers();
 * // Easily handle the error case by converting the error to a fallback value
 * const users: User[] = voidError(result) ?? [];
 * ```
 */
export function voidError<T>(value: T | Error): T | undefined {
  return value instanceof Error ? void 0 : value;
}
