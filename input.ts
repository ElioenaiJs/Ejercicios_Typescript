import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa tu nombre: ', (nombre) => {
    rl.question('Ingresa tu edad: ', (edad) => {
        console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
        rl.close();
    });
});
