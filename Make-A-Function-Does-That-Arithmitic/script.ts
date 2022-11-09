const  Arithmetic = (a : number, b : number, operator : string) : number => {
    return operator == 'add' ? a + b :
    operator == 'subtract' ? a - b : 
    operator == 'multiply' ? a * b : a / b;
  }