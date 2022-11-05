// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!

const  arithmetic = (a, b, operator) => {
    return operator == 'add' ? a + b :
    operator == 'subtract' ? a - b : 
    operator == 'multiply' ? a * b : a / b;
  }