//cojamos steveen
function sharedLetters(...strings) {

    //se convierten los cararcter a minusculas
    let sets = strings.map(str => new Set(str.toLowerCase()));
//st tomara el primer conjunto como referencia para compararlo con los otros
    let commonSet = sets[0];
    
    //se mantendran las letras
  for (let i = 1; i < sets.length; i++) {
    commonSet = new Set([...commonSet].filter(letter => sets[i].has(letter)));
}
//retornara la cantidad de numeros en letras comunes
return commonSet.size;
}
//caracteres por usar y bscar comunes
console.log(sharedLetters("mañana", "araña", "caña", "pera"));
console.log(sharedLetters("azul", "zorro", "rosa", "porra"));