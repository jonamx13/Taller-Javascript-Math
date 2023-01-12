//Mi solucion

const precio = document.querySelector('#precio');
const descuento = document.querySelector('#descuento');
const btnResultado = document.querySelector('#btnCalcular');
const resultado = document.querySelector('.resultado');

btnResultado.addEventListener('click', resultadoDisc);

function resultadoDisc() {
    const calculoPerc = (precio.value * (100 - descuento.value) / 100);

    resultado.innerText = `Precio con %${descuento.value} de descuento: $${calculoPerc}`;
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