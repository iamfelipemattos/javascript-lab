/*
   O metódo some();
        -> determina se a função de retorno da chamada especificada
        -> retorna true para qualquer elemento de uma matriz.
*/

var bandas = ["Carnifex","Suicide Silence","Make Them Suffer"];

function start(value, index, array) {
  return value[0] === "M";
}

var auxiliar = bandas.some(start);

console.log(auxiliar);

