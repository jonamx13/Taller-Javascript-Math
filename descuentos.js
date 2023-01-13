//Mi solucion

const precio = document.querySelector('#precio');
const btnResultado = document.querySelector('#btnCalcular');
const resultado = document.querySelector('.resultado');

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
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioDescuento);

function calcularPrecioDescuento() {
    //(P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    // Que pasa si no introducimos los dos valores
    if(!price || !coupon) {
        pResult.innerText = 'CHANCLA por favor rellena el formulario';
        return;
    }

    let discount;

    switch(coupon) {
        case 'JuanDC_es_Batman' :
            discount = 30;
            break;

        case 'no_le_digas_a_nadie' :
            discount = 25;

        default:
            pResult.innerText = 'El cupón no es válido';
            return;
    }

    /*  
    if (coupon == 'JuanDC_es_Batman') {
        discount = 30;
    } else if (coupon == 'no_le_digas_a_nadie') {
        discount = 25;
    } else {
        pResult.innerText = 'El cupón no es válido';
        return;
    } 
    */

    const newPrice = (price * (100 - discount) / 100);

    pResult.innerText = 'El nuevo precio con descuento en $' + newPrice;
}