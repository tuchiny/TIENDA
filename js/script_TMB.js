var tmb;
var sexo;
var actividad;
    
    function calcularTMB() {
    
        sexo = document.getElementById('sexo').value;
        actividad = document.getElementById('actividad').value;
        var altura = document.getElementById('altura').value;
        var peso = document.getElementById('peso').value;
        var edad = document.getElementById('edad').value;
        
        if (sexo && altura && actividad && peso && edad) {

            /* Para sexo === masculino */
    
            if(sexo === 'masculino' && actividad === 'Sed__activo'){

                tmb = 1.2 * ((10 * peso) + (6.25 * altura) - (5.0 * edad) + 5);
                var resultadoElement = document.getElementById('resultado4');
                resultadoElement.innerHTML = 'Cantidad de kcalorias es de: ' + tmb.toFixed(2);
            }
            else if (sexo === 'masculino' && actividad === 'Lig_activo'){

                tmb = 1.375 * ((10 * peso) + (6.25 * altura) - (5.0 * edad) + 5);
                var resultadoElement = document.getElementById('resultado4');
                resultadoElement.innerHTML = 'Cantidad de kcalorias es de: ' + tmb.toFixed(2);
            }
            else if (sexo === 'masculino' && actividad === 'Mod_activo'){

                tmb = 1.55 * ((10 * peso) + (6.25 * altura) - (5.0 * edad) + 5);
                var resultadoElement = document.getElementById('resultado4');
                resultadoElement.innerHTML = 'Cantidad de kcalorias es de: ' + tmb.toFixed(2);
            }
            else if (sexo === 'masculino' && actividad === 'Muy_activo'){

                tmb = 1.725 * ((10 * peso) + (6.25 * altura) - (5.0 * edad) + 5);
                var resultadoElement = document.getElementById('resultado4');
                resultadoElement.innerHTML = 'Cantidad de kcalorias es de: ' + tmb.toFixed(2);
            }
            else if (sexo === 'masculino' && actividad === 'Ext_activo'){

                tmb = 1.9 * ((10 * peso) + (6.25 * altura) - (5.0 * edad) + 5);
                var resultadoElement = document.getElementById('resultado4');
                resultadoElement.innerHTML = 'Cantidad de kcalorias es de: ' + tmb.toFixed(2);
            }

            /* Para sexo === Femenino */
    
            if(sexo === 'femenino' && actividad === 'Sed__activo'){

                tmb = 1.2 * ((10 * peso) + (6.25 * altura) - (5.0 * edad) - 161);
                var resultadoElement = document.getElementById('resultado4');
                resultadoElement.innerHTML = 'Cantidad de kcalorias es de: ' + tmb.toFixed(2);
            }
            else if(sexo === 'femenino' && actividad === 'Lig_activo'){

                tmb = 1.375 * ((10 * peso) + (6.25 * altura) - (5.0 * edad) - 161);
                var resultadoElement = document.getElementById('resultado4');
                resultadoElement.innerHTML = 'Cantidad de kcalorias es de: ' + tmb.toFixed(2);
            }
            else if(sexo === 'femenino' && actividad === 'Mod_activo'){

                tmb = 1.55 * ((10 * peso) + (6.25 * altura) - (5.0 * edad) - 161);
                var resultadoElement = document.getElementById('resultado4');
                resultadoElement.innerHTML = 'Cantidad de kcalorias es de: ' + tmb.toFixed(2);
            }
            else if(sexo === 'femenino' && actividad === 'Muy_activo'){

                tmb = 1.725 * ((10 * peso) + (6.25 * altura) - (5.0 * edad) - 161);
                var resultadoElement = document.getElementById('resultado4');
                resultadoElement.innerHTML = 'Cantidad de kcalorias es de: ' + tmb.toFixed(2);
            }
            else if(sexo === 'femenino' && actividad === 'Ext_activo'){

                tmb = 1.9 * ((10 * peso) + (6.25 * altura) - (5.0 * edad) - 161);
                var resultadoElement = document.getElementById('resultado4');
                resultadoElement.innerHTML = 'Cantidad de kcalorias es de: ' + tmb.toFixed(2);
            }
            
         
        }
            else {
                alert('Gracias por registrarte en La línea. Para activar tu cuenta accede a tu correo electronico para siguiente enlace de verificacion.');
            }
        }
    