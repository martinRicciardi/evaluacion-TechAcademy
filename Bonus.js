let texto = "javascript es un lenguaje hermoso. Podes hacer muchas cosas dinamicas y esto es un ejemplo de ello :)";
let caracteres = texto.split(''); //haces un array con los caraceres del texto

// console.log(caracteres);

for (let i = 0; i < caracteres.length; i++) {
    if (caracteres[i] === '.') {
        break;
    }
    caracteres[i] = caracteres[i].toUpperCase();
}

console.log(texto);
console.log(caracteres.join(''));

