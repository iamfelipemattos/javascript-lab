/*
    metódo map();
        -> recebe uma lista de valores(objeto ou matriz)
        -> retorna uma lista atualizada.
*/

var animais = ["Leão","Macaco","Ornitorinco","Iguana"];

var contador = 0;
function zoo(value, index, array){
  return "Animal " + (contador = contador + 1) + ": " + value;
}
var auxiliar = animais.map(doSomething);

console.log(animais);
console.log(auxiliar);

// inverte a ordem do array
[].map.call(animais, function(inverse) {
    return inverse + " ";
}).reverse().join('');