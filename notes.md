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
