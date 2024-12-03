var imc;
var sexo;


function calcularIMC() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    sexo = document.getElementById('sexo').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    if (nombre && edad && sexo && altura && peso) {
        imc = peso / ((altura / 100) * (altura / 100));
        var resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = 'Hola ' + nombre + ', Gracias por registrarte en La línea ';
        if (imc < 18.5){ 
        var rutinaElement = document.getElementById('resultado2');
        rutinaElement.innerHTML = 'Para activar tu cuenta accede a tu correo electronico para siguiente enlace de verificacion.';
        }
        else if (imc >= 18.5 && imc < 24.9) {
            var rutinaElement = document.getElementById('resultado2');
            rutinaElement.innerHTML = 'Su categoria es de Peso Normal.';
        } 
        else if (imc >= 25 && imc < 26.9) {
        var rutinaElement = document.getElementById('resultado2');
        rutinaElement.innerHTML = 'Su categoria es de Sobrepeso grado 1.';
        }
        else if (imc >= 27 && imc < 29.9) {
            var rutinaElement = document.getElementById('resultado2');
            rutinaElement.innerHTML = 'Su categoria es de Sobrepeso grado 2.';
        }  
        else if (imc >= 30 && imc < 34.9) {
            var rutinaElement = document.getElementById('resultado2');
            rutinaElement.innerHTML = 'Su categoria es de Obesidad tipo 1.';
        }  
        else if (imc >= 35 && imc < 39.9) {
            var rutinaElement = document.getElementById('resultado2');
            rutinaElement.innerHTML = 'Su categoria es de Obesidad tipo 2.';
        } 
        else if (imc >= 40 && imc < 49.9) {
            var rutinaElement = document.getElementById('resultado2');
            rutinaElement.innerHTML = 'Su categoria es de Obesidad tipo 3(mórbida).';
        } 
        else if (imc >= 50) {
            var rutinaElement = document.getElementById('resultado2');
            rutinaElement.innerHTML = 'Su categoria es de Obesidad tipo 4(Extrema).';
        } 

        }
        else {
            alert('Por favor, complete todos los campos.');
        }
}


function registrarUsuario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var edad = document.getElementById('edad').value;
    var resultadoElement = document.getElementById('resultado');

    if (nombre && correo && edad) {
        resultadoElement.innerHTML = 
            'Hola ' + nombre + ', Gracias por registrarte en La línea. ' + 
            'Para activar tu cuenta, accede a tu correo electrónico para el siguiente enlace de verificación.';
    } else {
        alert('Por favor, complete todos los campos: nombre, correo y edad.');
    }
}
