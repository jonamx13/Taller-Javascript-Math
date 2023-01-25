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

    return medianaSalarios;
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

function payRiseGeoMedian(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });

    const geoMedian = calculateGeometricMedian(salarios);
    const lastSalary = salarios[salarios.length - 1];
    const result = Number(geoMedian + lastSalary).toFixed(2);

    return `Your next salary should increase to $${result}`
}
function payRisePercentage(salaries) {
    let percentageIncrease = [];

    for (i = 1; i < salaries.length; i++) {
        const currentSalary = salaries[i];
        const lastSalary = salaries[i - 1];
        const rising = currentSalary - lastSalary;
        const risePercentage = rising / lastSalary;

        //Guard zero
        if(risePercentage == 0) { continue; }
        percentageIncrease.push(risePercentage);
    }

    const calculateMedianPercentage = MyMath.calculateMedianNoData(...percentageIncrease);

    return calculateMedianPercentage
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
}

//Mediana salarial para próximo año
//Rango de mediana salarial más baja y más alta
console.log(companies['Freelance']);

function salaryProjection(company, quantNextYears) {
    const companyPro = companies[company];
    let currentYear = Number(Object.keys(companyPro)[Object.keys(companyPro).length - 1]);
    let sortedYears = {};
    let lowestSalaries = [];
    let highestSalaries = [];
    let message;

    //Iterations
    for (let i = 0; i < quantNextYears; i++) {
        arrangeProjection();
        calculateRise();
        console.log(message);
    }

    //Methods
    function arrangeProjection() {
        
        //Sorting quantities per year
        Object.keys(companyPro).forEach( year => {
            const sortedArray = MyMath.sortList(Object.values(companyPro[year]));
            sortedYears[year] = sortedArray;
            
            lowestSalaries.push(sortedArray[0]);
            highestSalaries.push(sortedArray[sortedArray.length - 1]);
        });
    }
    
    function calculateRise(lowest, highest) {
        
        //Sort lowest & highest salaries and median
        lowestSalaries = MyMath.sortList(lowestSalaries);
        highestSalaries = MyMath.sortList(highestSalaries);

        const lowestMedian = MyMath.calculateMedianNoData(...lowestSalaries);
        const highestMedian = MyMath.calculateMedianNoData(...highestSalaries);

        //Rise Percentage
        const lowestMedianPercentage = payRisePercentage(lowestSalaries);
        const highestMedianPercentage = payRisePercentage(highestSalaries);

        const lastSalaries = [lowestSalaries[lowestSalaries.length - 1],
        highestSalaries[highestSalaries.length - 1]];
        const riseLowest = lastSalaries[0] * lowestMedianPercentage;
        const riseHighest = lastSalaries[1] * highestMedianPercentage;

        const newLowest = Number((lastSalaries[0] + riseLowest).toFixed(2));
        const newHighest = Number((lastSalaries[1] + riseHighest).toFixed(2));

        //Iteration push
        lowestSalaries.push(newLowest);
        highestSalaries.push(newLowest);
        currentYear += 1;

        //Message Structure
        message = `On year ${currentYear} "${company} company's" range of salaries will increase with a median of "$${newLowest}" to "$${newHighest}".`;
    }
    
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
    } else if (!empresas[nombre][year]) {
      console.warn('La empresa no dio salarios ese año');
    } else {
      return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
  }

 function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
      } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
          return medianaEmpresaYear(nombre, year);
        });    
        
        let porcentajesCrecimiento = [];

        for (i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
        const nuevaMediana = ultimaMediana + aumento;

        return nuevaMediana;
    }
 }

 //Análisis general
 function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;
 }

 function medianaTop10() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas)

    const cantidad = listaMedianas.length / 10;
    const result = medianasOrdenadas; // Mi solución
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    // slice
    // splice
    

    while(result.length > cantidad) { // Mi solución
        result.shift();
    }

    const medianaTop10 = PlatziMath.calcularMediana(top10);
    const medianaTopResult = MyMath.calculateMedianNoData(...result);

    return {medianaTop10, medianaTopResult};
 }