# @md/ensure-error

A suite of helper function and types to ensure reliable error handling.

Allows you to leverage the paradigm of returning errors as values instead of
throwing them, meaning that typescript forces you to handle any issues in your
code instead of having them bubble up crashing your app.

## Example

```ts
// `returnError()` wraps any function to return any thrown errors, async or not
import { returnError } from "jsr:@md/ensure-error/return-error";
const safeFetch = returnError(fetch);
const result = await safeFetch("https://example.com");

// `isError()` checks if a value is an `instanceof` `Error`. Specifically makes negations/ternaries more legible
import { isError } from "jsr:@md/ensure-error/is-error";
if (!isError(result)) console.log("Request worked!");

// `voidError()` allows us to simplify logic with default values through nullish coalescing (and optional chaining)
import { voidError } from "jsr:@md/ensure-error/void-error";
const status = voidError(result)?.status ?? 500;

// `ensureError()` converts any value into an `Error`. If it is an `Error` instance already, it's returned the same.
import { ensureError } from "jsr:@md/ensure-error/ensure-error";
const libValue = await strangeLibraryFunction().catch(ensureError); // This lib throws non-error values

// `WrappedError` is an `Error` child class that wraps any value to make sure we can deal with annoying cases
import { WrappedError } from "jsr:@md/ensure-error/wrapped-error";
if (libValue instanceof WrappedError) {
  console.error("Why throw a non-Error? Well, doesn't matter now!");
}
```
