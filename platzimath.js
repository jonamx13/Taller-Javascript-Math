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
    const orderedList = list.sort((a,b) => a - b);
    const isListEven = isArrayEven(...list);

    console.log(`Sorted list: ${orderedList}`);
    console.log(`isListEven: ${isListEven}`);
    
    if (isListEven) {
        //Central values
        console.log(`First central value: ${list[(list.length / 2) - 1 ]}`);
        console.log(`Second central value: ${list[(list.length / 2)]}`);

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
        console.log(`Central index: ${centerIndexOddList}`);
        console.log(medianOddList);

        return medianOddList;
    }
}

function bidimentionalListSort(list) {

    const  orderedList = list.sort((a,b) => a[1]-b[1]);

    return orderedList;
}

function calculateMode(...list) {
    const input = {};

    //Assign appearances
    list.forEach(val =>
        input[val]
        ? input[val] += 1
        : input[val] = 1);
    
    //Ordering appearances number & getting last key
    const arrayList = Object.entries(input);
    const orderedArray = bidimentionalListSort(arrayList);
    console.log(orderedArray);
    const lastKey = orderedArray[orderedArray.length - 1][0];
    
    //Check if there are more than one mode
    if (lastKey == orderedArray[orderedArray.length -2][1]) {
        return`There's no mode`;
    } else {
        return `Mode is: ${lastKey}`;
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

function calcularMediana(listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
         const indexMitad1ListaPar = (lista.length /  2)  - 1;
        const indexMitad2ListaPar = lista.length / 2; 

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

function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        /*
        if (valorAcumulado > nuevoValor) {
            return 1;
        } else if (valorAcumulado == nuevoValor) {
            return 0;
        } else if (valorAcumulado < nuevoValor) {
            return -1;
        }
        */
        return nuevoValor - valorAcumulado;
        // return valorAcumulado - nuevoValor;
        // return 5 - 10 -> -5;
        // return 5 - 5 -> 0;
        // return 10 - 5 -> 5;
    }

    // const lista = listaDesordenada.sort(ordenarListaSort);

    const  lista = listaDesordenada.sort((a,b) => a-b);

    return lista;
}



function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
          listaCount[elemento] += 1;
        } else  {
          listaCount[elemento] = 1;
        }
    }
    
    const listaArray = Object.entries(listaCount);
    console.log({listaCount, listaArray});
}