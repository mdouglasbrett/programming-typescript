// TS can't infer parameters, but will infer a return value
const mySumFunc = (a: number, b: number) => {
    return a + b;
}

// Arguments is unsafe, will force n and total to be any
// const mySumFuncWithArgs = () => Array.from(arguments).reduce((total, n) => total + n, 0)

const mySumFuncWithRest = (...numbers: number[]) => numbers.reduce((total, n) => total + n, 0)

export {}