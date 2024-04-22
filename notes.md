# pnpm

Exec typescript file on the flight without compiling to js:
`pnpm exec ts-node demo/boolean-logic/boolean-logic.ts`

# TS

## Type Aliases

It's a way to call something that already exists in a new way.

```ts
type PersonName = string;
```

## Object Types

It's like declaring a Type Alias, but we define a new, compsable type:

```ts
type Coordinate = {
  x: number;
  y: number;
};
```

## Tuples

We know that an array supports elements of the same type, tuples also supports element of different types. It is built like an array:

```ts
type Title = string;
type PublishYear = number;
type Book = [Title, PublishYear];

const sample: Book = ["book", 1935];
```

## Interfaces

As other programming languages, interfaces are **contracts** that tells the user what methods the implementers must declare and implement.

Interfaces can declare **properties** as well.

It's preferrable to use interfaces instead over Type Aliases as they lead better error messages.

## Map Data Type

Key-value pairs association that allows to access to elements in a faster way rather than arrays.

## Exception

We can trigger new exceptions by using `throw new Error()`.

```ts
try {
  // Code in the `try` block will execute until either:
  // 1. the end of the block is reached
  // 2. an exception is thrown
  const num = divide(10, 0);
} catch (e) {
  // Code in the `catch` block only executes when the code in the
  // `try` block throws an exception. We can access the thrown
  // error with the `e` variable (or any name we give it).
  console.log(`an error occurred: ${e}`);
  console.log("try a different number next time");
} finally {
  // a `finally` block always executes.
  console.log("this block will execute no matter what");
}
```

## Type Assertions

```ts
const greeeting: unknown = "hello";
const greet = greeting as string; // this is type assertion
```

## Union Types

```ts
type Color = "red" | "green" | "blue";
type StrOrNum = string | number;
```

## Discriminated Unions

It is useful to create a type that only allows certain values.

```ts
type numbers = 1 | 2 | string | number;

type AccountCreationMessage =
  | { kind: "ok"; greeting: string }
  | { kind: "passwordComplexityFailuer"; message: string }
  | { kind: "usernameExists" };
```

## Type Predicates

Let's suppose we have the following types:

```ts
interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Circle;
```

Now let's examine the following code:

```ts
// The `shape is Square` is the type predicate.
// If the function returns `true`, then the input data `shape` is of type `Square`.
// If the function returns `false`, then the input data `shape` is _not_ a `Square`.
function isSquare(shape: Shape): shape is Square {
  // We can check to see if a particular field is equal to something:
  return shape.kind === "square";
}

function isCircle(shape: Shape): shape is Circle {
  // We can check if the type contains a member using a type guard:
  return "radius" in shape;
}

function calculateArea(shape: Shape): number {
  // We can use the type predicate function as a type guard:
  if (isSquare(shape)) {
    // TypeScript compiler now knows that `shape` is a `Square` type, so we get safe
    // access to the `size` field:
    return shape.size ** 2;
  }
  if (isCircle(shape)) {
    return Math.PI * shape.radius ** 2;
  }

  throw "unknown shape";
}
```

And it's different to just return a `boolean` in the `isCirlce` and `isSquare` functions, this because it won't give any assurance that the type is effectively a `Circle` or a `Square`to the compiler.

## Optional Fields and chaining

```ts
if (result?.pii?.age){

}

// equal to
if (
    result !== undefined &&
    result !== null &&
    result.pii !== undefined &&
    result.pii !== null &&
    result.pii.age !== undefined &&
    result.pii.age !== null
  )
```

## Interface with Java - Type definitions

**Type definition** files contain all the functions declared in the js module along with type annotaions for each one.

## Const assertion

Const assertion `as const` allows us to take an array or object as a constant, thus to iterate over its items/keys and use it as a type like we would do with a Union Type.

```ts
/* eslint-disable */

// `as const` allows you to create readonly values in your code. When you use
// `as const` on an object, array or tuple, TypeScript infers that the values
// are constant and cannot be modified later. This can help prevent unexpected
// bugs in your code and make it easier to reason about. It's particularly
// useful when working with APIs or configurations where values should not be
// changed during runtime.

// Union type only allows us to assign these values:
type Rgb = "red" | "green" | "blue";

{
  // 'as const' is similar to a union type, but allows iteration of
  // each member.
  //
  // Array of our options:
  const Color = ["red", "green", "blue"] as const;
  // Create a type from the array members (same as union):
  type Color = (typeof Color)[number];
  // Colors can be assigned just like a union type:
  const red: Color = "red";

  // Iteration through all the colors is now possible because `Color` is
  // an array:
  for (const c of Color) {
    console.log(c); // red, green, blue
  }
}

{
  // 'as const' can also be used with objects:
  const Department = {
    Executive: "executive",
    Sales: "sales",
    Warehouse: "warehouse",
  } as const;
  type Department = (typeof Department)[keyof typeof Department];

  // `for..in` loop will allow us to iterate over the keys and values:
  let k: keyof typeof Department;
  for (k in Department) {
    console.log(`[${k}]: ${Department[k]}`);
  }

  const exec: Department = Department.Executive;
}
```

## Iterators

Iterators use **generator functions** i.e. a function that run such as any other function until it **yield** a value, then the function state get saved and execution goes back to the caller. Next time the generator function gets calledm ut resumes from the saved state until either finished or yields another value.
