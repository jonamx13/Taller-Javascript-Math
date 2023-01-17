// Mi solucion

function promedioCicloFor(...nums) {
    const numeros = nums;
    let total = 0;

    numeros.forEach( function (number) {
        total += number;
    });
    return total / numeros.length
}

function promedioReduce(...nums) {
    const numeros = nums;
    
/*     function sumarNumeros(valorInicial, nuevoValor) {
        return valorInicial + nuevoValor;
    }

*/

    const sumarNumeros = (valorInicial, nuevoValor) => valorInicial + nuevoValor;
    // const total = numeros.reduce(sumarNumeros);
    const total = numeros.reduce((a,b) => a + b);

    return total / numeros.length;
}

function isArrayEven(...arr) {
    //Ternary option
    return arr.length % 2 == 0
    ? true
    : false
}

// Solucion profesor

// [1,2,3,4]
function calcularPromedioCicloFor(lista) {
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}

function calcularPromedioReduce(lista) {
     function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

/*
     const ejemplo = (a, b) => a + b;

    const sumarTodosElementos = (valorAcumulado, nuevoValor) =>  valorAcumulado + nuevoValor;
    const sumaLista = lista.reduce(sumarTodosElementos);
 */
//  const sumaLista = lista.reduce((a, b) => a + b);

    const sumaLista = lista.reduce(sumarTodosElementos); 

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}