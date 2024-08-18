//definicion de un String "que no salga la luna"
 
 const array = `que no salga la luna`;

 //se pasa el String a un array de caracteres y cuenta cuantas veces aparece el caracter

const wordByLetters = array.split('').reduce((acc, current) => {
//si dicho caracter ya existe enn este acumulador se incrementara su contador
//pero de lo contrario inicializa su contador en 1
acc[current] = acc[current] ? acc[current] + 1 : 1;
  return acc;
}, {});

//aqui buscara el carácter que se repite
const [text, timesRepeated] = Object.entries(wordByLetters).find(([_, value]) => {
    return value === Math.max(...Object.values(wordByLetters));
});

//imprimira en la consola la cantidad de veces que se repite dicho caracter 

console.log(`cantidad de caracter repetido: "${timesRepeated}" `); 