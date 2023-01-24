console.log(salarios);

// Análisis personal para Juanita


function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);

    /* 
    const personaEnBusqueda = 'Juanita';
    salarios.find((persona) => { 
        return persona.name == personaEnBusqueda;
    });
    return persona; 
    */
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    console.log(salarios);
}

///////Mi solución///////
//Media geometrica
//Multiplicar entre cada entrada
//Obtener raíz enésima (n)
function calculateGeometricMedian(quantities){
    const quant = quantities;
    let multiplied = 1;
    const root = quantities.length;

    quant.forEach(quantity => {
        multiplied = multiplied * quantity
    });
    
    return Math.pow(multiplied, 1 / root);
}

function payRaise(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });

    const geoMedian = calculateGeometricMedian(salarios);
    const lastSalary = salarios[salarios.length - 1];
    const result = Number(geoMedian + lastSalary).toFixed(2);

    return `Your next salary should increase to $${result}`
}

///////Solucion Profe///////
function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    let porcentajesCrecimiento = [];

    for (i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    //console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;


    return nuevoSalario;
}