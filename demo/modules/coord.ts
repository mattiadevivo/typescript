// Interfaces can be exported:
export interface Point {
  x: number;
  y: number;
}

// Default exported item. Prefer to NOT use this because it can break code
// completion.
// eslint-disable-next-line import/no-default-export
export default Point;
