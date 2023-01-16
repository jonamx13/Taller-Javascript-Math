// Mi solucion

function promedio(...nums) {
    const numeros = nums;
    let total = 0;

    numeros.forEach( function (number) {
        total += number;
    });
    return total / numeros.length
}

// Solucion profesor

// [1,2,3,4]
function calcularPromedio(lista) {
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}