var entrada1 = document.querySelector('#valor-hora');
var entrada2 = document.querySelector('#horas-projeto');

var resultado = document.querySelector('#resposta');

function calcular() {
    var _valorHora = entrada1.value;
    var _horasProjeto = entrada2.value;

    

    var _resultado = parseFloat(_valorHora * _horasProjeto).toFixed(2);


    resposta.textContent = 'R$ ' + _resultado;
}
//Desafio