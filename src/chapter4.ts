// TS can't infer parameters, but will infer a return value
const mySumFunc = (a: number, b: number) => {
  return a + b;
};

// Arguments is unsafe, will force n and total to be any
// const mySumFuncWithArgs = () => Array.from(arguments).reduce((total, n) => total + n, 0)

const mySumFuncWithRest = (...numbers: number[]) =>
  numbers.reduce((total, n) => total + n, 0);

type Reservation =
  | {
      type: "single" | "return" | "evac";
    }
  | undefined;
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
};

const Reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
): Reservation => {
  if (typeof fromOrDestination === "string") {
    return {
      type: "evac",
    };
  }
  if (toOrDestination && typeof toOrDestination === "string") {
    return {
      type: "single",
    };
  }
  if (
    toOrDestination &&
    toOrDestination instanceof Date &&
    destination !== undefined
  ) {
    return {
      type: "return",
    };
  }
};

// Explicitly set the order of the rest array
function call<T extends [unknown, string, ...unknown[]], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

call(fill, 10, "string");
// Error
// call(fill, 10, true)

function is<T extends unknown>(...args: T[]): boolean {
  let assert = false;
  args.reduce((prev, current) => {
    assert = JSON.stringify(prev) === JSON.stringify(current);
    return current;
  });
  return assert;
}

is(true, false, true);
// Error
// is(true, "false")

export {};
