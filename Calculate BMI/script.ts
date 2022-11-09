function bmii(weight : number, height : number) : string {
    let total = weight / (height * height);
    if(total <= 18.5)
      return 'Underweight'
      if(total <= 25.0)
      return 'Normal'  
    if(total <= 30.0)
      return 'Overweight'
    else return "Obese"
  }
  console.log(bmi(80,1.80))