/*
    new operator
    -> Garante que o objeto referênciado pelo THIS seja retornado ao témino da função
    -> Quando uma função é invocada por meio do new operator, é criado a instância do Object
        e atribuida ao this. 
*/

var SiliconValley = function(criado, ano, elenco, pais, genero, duracao, descricao) {
    this.criado = criado;
    this.ano = ano;
    this.elenco = elenco;
    this.pais = pais;
    this.genero = genero;
    this.duracao = duracao;
    this.descricao = descricao;
}

var informacoes = new SiliconValley(
    "Mike Judge, John Altschuler, Dave Krinsky, Alec Berg"
    ,2014
    ,"Thomas Middleditch, T.J. Miller, Josh Brener ... + "
    ,"EUA"
    ,"Comédia"
    ,"26 minutos"
    ,"Richard (Thomas Middleditch), Big Head (Josh Brener), Gilfoyle (Martin Starr) e Dinesh (Kumail Nanjiani) são programadores tão inteligentes quanto introvertidos. Eles trabalham na companhia Hooli, no Vale do Silício, e vivem sob a custódia de Erlich, um milionário que os deixa morarem em sua casa de graça - desde que ele ganhe 10% dos lucros dos projetos dos garotos."
);

for(var i = 0; i < SiliconValley.length; i++){
    console.log(informacoes)
}

console.log(informacoes.criado);
console.log(informacoes.ano);
console.log(informacoes.elenco);
console.log(informacoes.pais);
console.log(informacoes.genero);
console.log(informacoes.duracao);
console.log(informacoes.descricao);