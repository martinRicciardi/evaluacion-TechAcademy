let texto = "javascript es un lenguaje hermoso";
let caracter = "a"
let totalCaracteres = [];

for(let i of texto){
    if(i === caracter){
        totalCaracteres.push(i)
    }
}

console.log("El caracter " + caracter + " se repite " + totalCaracteres.length + " en " + texto);