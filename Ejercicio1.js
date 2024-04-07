for(let i = 0; i <= 20; i++){

    let numero = Math.floor(Math.random()*100);

    if(numero%2 !== 0){
        console.log("El numero " + numero + " es impar");
    }else console.log("El numero " + numero + " es par");
}