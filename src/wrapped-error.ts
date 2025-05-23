/** Wraps any value in a typed Error with the original value in the `value` property */
export class WrappedError extends Error {
  constructor(public value: unknown) {
    super(
      typeof value === "string"
        ? value
        : "A non-error value was thrown (see value property)",
    );
    this.name = "WrappedError";
  }
}
