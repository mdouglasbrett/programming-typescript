let a = 1 + 2
let b = a + 3
let c = {
    apple: a,
    banana: b
}

// TS can't infer args
const growApples = (growthFactor: number) => {
    return c.apple * growthFactor
}

let d = growApples(4)

// Module vs script behaviour
export {}
