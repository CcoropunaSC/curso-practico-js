//Calcular el área de un cuadrado
var resultadoCuadrado;
var resultadoTrianguloRectangulo;

function init()
{
    resultadoCuadrado = document.getElementById('resultadoCuadrado');
    resultadoCuadrado.style.display = 'none';

    resultadoTrianguloRectangulo = document.getElementById('resultadoTrianguloRectangulo');
    resultadoTrianguloRectangulo.style.display = 'none';
}

function calcularAreaCuadrado()
{
    let ladoCuadrado = document.getElementById('ladoCuadrado'); 
    let campoResultadoCuadrado = document.getElementById('campoResultadoCuadrado');
    let campoErrorCuadrado = document.getElementById('campoErrorCuadrado');

    let area = ladoCuadrado.value * 4;

    if (ladoCuadrado.value == "") {
        resultadoCuadrado.style.display = 'block';
        campoResultadoCuadrado.style.display = 'none';
        campoErrorCuadrado.style.display = 'block';
        campoErrorCuadrado.innerHTML = "El lado es obligatorio"
    } else {
        resultadoCuadrado.style.display = 'block';
        campoErrorCuadrado.style.display = 'none';
        campoResultadoCuadrado.style.display = 'block';
        campoResultadoCuadrado.innerHTML = 'El érea del cuadrado es: ' + area + ' cm2';
    }
}

function calcularAreaTrianguloRectangulo()
{
    let altoTrianguloRectangulo = document.getElementById('altoTrianguloRectangulo'); 
    let baseTrianguloRectangulo = document.getElementById('baseTrianguloRectangulo'); 
    let campoResultadoTrianguloRectangulo = document.getElementById('campoResultadoTrianguloRectangulo');
    let campoErrorTrianguloRectangulo = document.getElementById('campoErrorTrianguloRectangulo');

    let area = (altoTrianguloRectangulo.value * baseTrianguloRectangulo.value) / 2;


    if (altoTrianguloRectangulo.value == "" || baseTrianguloRectangulo == "") {
        resultadoTrianguloRectangulo.style.display = 'block';
        campoResultadoTrianguloRectangulo.style.display = 'none';
        campoErrorTrianguloRectangulo.style.display = 'block';
        campoErrorTrianguloRectangulo.innerHTML = "El lado es obligatorio"
    } else {
        resultadoTrianguloRectangulo.style.display = 'block';
        campoErrorTrianguloRectangulo.style.display = 'none';
        campoResultadoTrianguloRectangulo.style.display = 'block';
        campoResultadoTrianguloRectangulo.innerHTML = 'El érea del cuadrado es: ' + area + ' cm2';
    }
}

init();