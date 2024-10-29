"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingresa tu nombre: ', function (nombre) {
    rl.question('Ingresa tu edad: ', function (edad) {
        console.log("Hola, ".concat(nombre, ". Tienes ").concat(edad, " a\u00F1os."));
        rl.close();
    });
});
