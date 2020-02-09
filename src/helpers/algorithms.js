// Constant Time
export const constantTime = n => n === 0 ? 0 : 1

// Logarithmic Time
export const logarithmicTime = n => n === 1 ? 1 : Math.log(n)

// Linear Time=
export const linearTime = n => n

// Quadratic Time
export const quadraticTime = n => Math.pow(n, 2)

// Cubic Time
export const cubicTime = n => Math.pow(n, 3)
