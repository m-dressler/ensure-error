# @md/ensure-error

A suite of helper function and types to ensure reliable error handling.

Allows you to leverage the paradigm of returning errors as values instead of
throwing them, meaning that typescript forces you to handle any issues in your
code instead of having them bubble up crashing your app.

## Example

```ts
import {
  ensureError,
  isError,
  returnError,
  WrappedError,
  voidError,
} from "jsr:@md/ensure-error";

const safeFetch = returnError(fetch);
const result = await safeFetch("https://example.com");
// We can now enforce type safe exception handling
console.log(
  isError(result)
    ? "Network error: " + result.message
    : "Response Status: " + result.status,
);

// voidError allows us to simplify logic with default values through optional chaining
const status = voidError(result)?.status ?? 500;

const libValue = await strangeLibraryFunction().catch(ensureError); // This lib throws non-error values
if (libValue instanceof WrappedError) {
  console.error("Library again threw a non-Error value >:(");
}
```
