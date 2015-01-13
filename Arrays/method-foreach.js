/*
  Metódo ForEach();
    -> Chama a função callback para cada elemento na matriz
    -> Não modifica a matriz original, mas a função de retorno pode modificá-la.
*/

var seriados = [
    "Silicon Valley"
    ,"Halt and Cat Fire"
    ,"The IT Crowd"
];

var contador = 0;
function melhores_seriados(value, index, array){
  console.log((contador = contador + 1) + " Lugar: " + value)
}

seriados.forEach(melhores_seriados);