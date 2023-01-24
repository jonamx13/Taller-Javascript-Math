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