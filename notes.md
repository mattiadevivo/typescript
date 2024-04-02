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
