//Mi solucion

const precio = document.querySelector('#precio');
const btnResultado = document.querySelector('#btnCalcular');
const resultado = document.querySelector('.resultado');
const cupones = document.querySelector('#cupon1');

btnResultado.addEventListener('click', resultadoDisc);

function resultadoDisc() {
    let descuento = 0;

    //Si hay cupones
    if (cupon1.checked)  { descuento += 15 }
    if (cupon2.checked)  { descuento += 10 }
    if (cupon3.checked)  { descuento += 12 }
    
    //Calculo del precio final
    const calculoPrecio = (precio.value * (100 - descuento) / 100);

    //Resultado
    switch(true) {
        case (descuento >= 100):
            resultado.innerHTML = "Nada es gratis";
            break;
        case (descuento == 0):
            resultado.innerHTML = `El artículo no tiene descuento, el precio se queda en ${calculoPrecio}`;
            break;
        default:
            resultado.innerText = `Precio con %${descuento} de descuento: $${calculoPrecio}`;
    }
    
}

//Solucion profesor

const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioDescuento);

function calcularPrecioDescuento() {
    //(P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    // Que pasa si no introducimos los dos valores
    if(!price || !discount) {
        pResult.innerText = 'CHANCLA por favor rellena el formulario';
        return;
    }

    // Limitar el descuento a 100
    if(discount > 100) {
        pResult.innerText = 'Ajá, ya quisieras, no te vamos a dar plata, PAGA!';
        return;
    }

    const newPrice = (price * (100 - discount) / 100);

    pResult.innerText = 'El nuevo precio con descuento en $' + newPrice;
}