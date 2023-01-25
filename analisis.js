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

const companies = {}
console.log(companies)

salarios.forEach(persona => {
    const jobs = persona.trabajos;

    jobs.forEach(job => {
        //Agregar empresa
        if(!companies[job.empresa]) {
            companies[job.empresa] = {};
        }
        //Agregar año
        if(!companies[job.empresa][job.year]) {
            companies[job.empresa][job.year]= [];
        }

        //Agregar salario al año correspondiente
        companies[job.empresa][job.year].push(job.salario);
        
    });
});

console.log(companies);

function calculateMedianByYear(company, year) {
    //Guarding
    if(!companies[company]) {
        return `The company ${company} has no registers`;
    }

    //Begin
    const companyName = company;
    const arrayYear = companies[company][year]  
    let message;

    if(arrayYear) {
        const medianPerYear = MyMath.calculateMedian(...arrayYear);
        message = `The company "${companyName}" had a median salary of "$${medianPerYear}" on ${year}.`;
    } else {
        message = `The company "${companyName}" had no salary record on ${year}`
    }

    return message;
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

//Análisis empresarial
 /* {
    Industrias Mokepon: {
        2018: [salario, salario, salario]
        2019:
        2025:
        2026:
    }
    Industrias Mokepon: {}
    Industrias Mokepon: {}
    Industrias Mokepon: {}
 }
  */

 const empresas = {}

 for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if(!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }
        if(!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
 }

 console.log({empresas});

 function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else if (!empresas[empresa][year]) {
        console.warn('La empresa no dio salarios ese año');
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
 }
