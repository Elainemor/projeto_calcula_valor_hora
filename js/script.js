var ganhoMes = document.querySelector('#ganho-mes');
var horasDias = document.querySelector('#horas-dia');

var resultado = document.querySelector('#resposta');

function calcularValorHora() {
    var _ganhomes = ganhoMes.value;
    var _horasdias = horasDias.value;

    

    var _resultado = parseFloat(_ganhomes / (_horasdias*22)).toFixed(2);


    resposta.textContent = 'R$ ' + _resultado;
}