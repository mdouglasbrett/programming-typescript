// TS can't infer parameters, but will infer a return value
const mySumFunc = (a: number, b: number) => {
    return a + b;
}

// Arguments is unsafe, will force n and total to be any
// const mySumFuncWithArgs = () => Array.from(arguments).reduce((total, n) => total + n, 0)

const mySumFuncWithRest = (...numbers: number[]) => numbers.reduce((total, n) => total + n, 0)

type Reservation = {
    type: "single" | "return" | "evac"
} | undefined
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
    (destination: string): Reservation
}

let Reserve: Reserve = (fromOrDestination: Date | string, toOrDestination?: Date | string, destination?: string): Reservation => {
    if (typeof fromOrDestination === "string") {
        return {
            type: "evac"
        }
    }
    if (toOrDestination && typeof toOrDestination === 'string') {
        return {
            type: "single"
        }
    }
    if (toOrDestination && toOrDestination instanceof Date && destination !== undefined) {
        return {
            type: "return"
        }
    }
}

export {}