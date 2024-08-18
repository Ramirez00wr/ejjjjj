 // obtener el mínimo común múltiplo 
  function calcularMCM(a, b){
//func para calculr el mcd
 function calcularMCD(a, b){
  if (b === 0){
    return a;
  }
return calcularMCD(b, a % b);
 }
 //aqui se calcula de forma (a*b) mcd(a, b)
 return (a * b) / calcularMCD (a, b);
  }
//se le solicitara 3 numeros que desea sacar mcm el usuario
  const number1 = parseInt(prompt('ingresa el primer numero: '), 10);
  const number2 = parseInt(prompt('ingresa el segundo numero: '), 10);
  const number3 = parseInt(prompt('ingresa el tercer numero: '), 10);

//sw calculan los 3 numeros

  const mcmDosNumeros = calcularMCM(number1, number2);
  const mcmTresNumeros = calcularMCM(mcmDosNumeros, number3);
//resultado
  console.log(`el mcm de ${number1}, ${number2} y ${number3} es: ${mcmTresNumeros}`);