/*
    O metódo slice();
        -> retorna um objeto de array com a parte especifica
        -> recebe dois parâmetros(inicio/fim), o segundo é opcional.
*/

var cores = ['pink','orange','blue','green']
var auxiliar = cores.slice(0,3);


function lista(){
  return Array.prototype.slice.call(arguments, 0);
}
var lista_auxiliar = lista('pink','blue','black');

console.log(lista_auxiliar);