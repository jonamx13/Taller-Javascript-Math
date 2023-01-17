///////////// Mi solucion

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

function calculateMedian(...list) {
    const isListEven = isArrayEven(...list);

    console.log(isListEven);

    if (isListEven) {
        //Central values
        console.log(list[(list.length / 2) - 1 ]);
        console.log(list[(list.length / 2)])

        // Operation
        const centerIndexEvenList = 
        list[(list.length / 2) - 1] + 
        list[(list.length / 2) ];

        const medianEvenList = centerIndexEvenList / 2;

        return medianEvenList;

    } else {
        //Central value
        const centerIndexOddList = Math.floor(list.length / 2);
        const medianOddList = list[centerIndexOddList];

        //Result
        console.log(centerIndexOddList);
        console.log(medianOddList);

        return medianOddList;
    }
}

///////////// Solucion profesor

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

function esPar(lista) {
    return !(lista.length % 2);
}

function esImpar(lista) {
    return lista.length % 2;
}

function calcularMediana(lista) {
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
         const indexMitad1ListaPar = (lista.length /  2)  - 1;
        const indexMitad2ListaPar = lista.lenght / 2; 

        /* 
        const mitad1ListaPar = lista[(lista.length / 2)  - 1];
        const mitad2ListaPar = lista[lista.lenght / 2]; */ 

        // lista[indexMitad1ListaPar]
        // lista[indexMitad2ListaPar]
        // [lista[indexMitad1ListaPar], lista[indexMitad2ListaPar]]
        
        /*
        const listaMitades = [mitad1ListaPar, mitad2ListaPar];
        */

        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);

        const medianaListaPar = calcularPromedioReduce(listaMitades);

        return medianaListaPar;
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;

    }
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
    // const sumaLista = lista.reduce((a, b) => a + b);

    const sumaLista = lista.reduce(sumarTodosElementos); 

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    // return promedio;
}