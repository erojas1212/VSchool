function calculator(num1, operator, num2) {
    let Sum = num1 + num2;
        if (operator === "+") return Sum;

    let Subtract = num1 - num2;
        if (operator === "-") return Subtract

    let Multiplication = num1 * num2
        if (operator === "*") return Multiplication

    let Division = num1 / num2
        if (operator === "/") return Division
}

console.log(calculator(2, "+", 3))
console.log(calculator(2, "-", 43))
console.log(calculator(2, "*", 43))
console.log(calculator(2, "/", 43))
