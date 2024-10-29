// Importa el módulo 'readline' de Node.js, que permite interactuar con la consola.
import * as readline from 'readline';

// Crea una interfaz de lectura para manejar la entrada y salida en la consola.
const rl = readline.createInterface({
    // Define el flujo de entrada como el estándar de entrada (teclado).
    input: process.stdin,
    // Define el flujo de salida como el estándar de salida (consola).
    output: process.stdout
});

// Pregunta al usuario por su nombre y espera una respuesta.
rl.question('Ingresa tu nombre: ', (nombre) => {
    // Una vez que se recibe el nombre, pregunta por la edad del usuario.
    rl.question('Ingresa tu edad: ', (edad) => {
        // Muestra un mensaje en la consola utilizando las entradas del usuario.
        console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
        // Cierra la interfaz de lectura, finalizando la interacción.
        rl.close();
    });
});
