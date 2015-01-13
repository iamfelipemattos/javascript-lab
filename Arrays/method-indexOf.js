/*
  metódo indexOf
    -> Retorna a posição do caractere onde a primeira ocorrência de uma substring em uma string é encontrada.
    -> O segundo argumento é opcional: especifica o indice que inicia a busca.
    -> Caso o segundo argumento seja omitido: ele buscara toda a matriz
*/

var pingas = ["Corote", "Paizano","Velho Barreiro","Vilha Velha", "51"];
var index = pingas.indexOf("Velho Barreiro");
var lastindex = pingas.lastIndexOf("51");

console.log(index);
console.log(lastindex);