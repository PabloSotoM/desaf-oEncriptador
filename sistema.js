document.addEventListener('DOMContentLoaded', (event) => {
    const inputTexto = document.getElementById('inputTexto');
    const resultadoTexto = document.getElementById('resultadoTexto');
    const btnEncriptar = document.getElementById('btnEncriptar');
    const btnDesencriptar = document.getElementById('btnDesencriptar');
    const btnCopiar = document.getElementById('btnCopiar');
    const btnLimpiar = document.getElementById('btnLimpiar');

    // Al hacer clic en el input de texto, se borra el texto por defecto y se activan los botones
    inputTexto.addEventListener('focus', function() {
        if (inputTexto.value === 'Ingresar únicamente minúsculas sin tildes ni caracteres especiales, por favor.') {
            inputTexto.value = '';
            activarBotones();
        }
    });

    // Solo se permiten minúsculas y espacios
    inputTexto.addEventListener('input', function() {
        inputTexto.value = inputTexto.value.toLowerCase().replace(/[^a-z\s]/g, '');
    });

    // Función de encriptación 
    function encriptar(texto) {
        // objeto para mapear las letras a sus transformaciones
        const mapaEncriptacion = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
    
        // expresión regular para reemplazar las letras según el mapa de encriptación
        let textoEncriptado = texto.replace(/[eiaou]/g, function(match) {
            return mapaEncriptacion[match];
        });
    
        return textoEncriptado;
    }

    // Función de desencriptación 
    function desencriptar(texto) {
        // objeto para mapear las letras a sus transformaciones
        const mapaDesencriptacion = {
            'enter': 'e',
            'imes': 'i' ,
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
    
        //  expresión regular para reemplazar las letras según el mapa de encriptación
        let textoDesencriptado = texto.replace(/enter|imes|ai|ober|ufat/g, function(match) {
            return mapaDesencriptacion[match];
        });
    
        return textoDesencriptado;
    }




    // Función para copiar texto al portapapeles
    function copiarAlPortapapeles(texto) {
        navigator.clipboard.writeText(texto).then(function() {
            alert('Texto copiado al portapapeles');
        }, function() {
            alert('Error al copiar el texto');
        });
    }
      
    // Función para mostrar/ocultar la imagen del cuadro de resultados
    function mostrarImagenFondo(muestra) {
        if (muestra) {
            resultadoTexto.classList.add('conFondo'); 
        } else {
            resultadoTexto.classList.remove('conFondo');
        }
    }

    // Eventos para los botones
    btnEncriptar.addEventListener('click', function() {
        let texto = inputTexto.value;
        let textoEncriptado = encriptar(texto);
        resultadoTexto.value = textoEncriptado;
        mostrarImagenFondo(false);
    });

    btnDesencriptar.addEventListener('click', function() {
        let texto = inputTexto.value;
        let textoDesencriptado = desencriptar(texto);
        resultadoTexto.value = textoDesencriptado;
        mostrarImagenFondo(false);
    });

    btnCopiar.addEventListener('click', function() {
        let texto = resultadoTexto.value;
        copiarAlPortapapeles(texto);
    });

    // Botón para limpiar el tablero
    btnLimpiar.addEventListener('click', function() {
        inputTexto.value = 'Ingresar únicamente minúsculas sin tildes ni caracteres especiales, por favor.';
        resultadoTexto.value = '';
        mostrarImagenFondo(true);
        desactivarBotones();
    });

    // Mostrar la imagen de cuadro de resultados al inicio de la página
    mostrarImagenFondo(true);

    // Función para activar botones Encriptar, Desencriptar y Copiar
    function activarBotones() {
        btnEncriptar.removeAttribute("disabled");
        btnDesencriptar.removeAttribute("disabled");
        btnCopiar.removeAttribute("disabled");
        btnLimpiar.removeAttribute("disabled");
        actualizarEstilosBotones('rgb(122, 16, 16)');
    }

    // Función para desactivar botones Encriptar, Desencriptar y Copiar
    function desactivarBotones() {
        btnEncriptar.setAttribute("disabled", true);
        btnDesencriptar.setAttribute("disabled", true);
        btnCopiar.setAttribute("disabled", true);
        btnLimpiar.setAttribute("disabled", true);
        actualizarEstilosBotones('grey');
    }

    // Función para actualizar estilos de botones
    function actualizarEstilosBotones(color) {
        btnEncriptar.style.backgroundColor = color;
        btnDesencriptar.style.backgroundColor = color;
        btnCopiar.style.backgroundColor = color;
        btnLimpiar.style.backgroundColor = color;
     
    }
});
