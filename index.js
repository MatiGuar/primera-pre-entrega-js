let producto = parseInt(prompt('Agrega los productos que quieres comprar: 1.Melaza de Caña - 2.Harina de Roca - 3.Cascarilla de Arroz - 4.Carbonilla Vegetal - 5.Bio Carbon Activado - 6.Agua de Mar - 7.Cera Natural - 8.Ormus'))
let totalCompra = 0 
let seguirComprando = true
let totalCuota = 0
let pagarEnCuota = true

const melaza = 1200;
const harina = 900;
const cascarilla = 700;
const carbonilla = 800;
const carbon = 1100;
const agua = 1900;
const cera = 1600;
const ormus = 1500;

while(seguirComprando === true) {
    if(producto === 1) {
        totalCompra = totalCompra + melaza
    }else if(producto === 2){
        totalCompra = totalCompra + harina
    } else if(producto === 3){
        totalCompra = totalCompra + cascarilla
    } else if(producto === 4){
        totalCompra = totalCompra + carbonilla
    } else if (producto === 5) {
        totalCompra = totalCompra + carbon
    } else if (producto === 6) {
        totalCompra = totalCompra + agua
    } else if (producto === 7) {
        totalCompra = totalCompra + cera
    } else if (producto === 8){
        totalCompra = totalCompra + ormus
    } else {
        producto = parseInt(prompt('Agrega los productos que quieres comprar: 1.Melaza de Caña - 2.Harina de Roca - 3.Cascarilla de Arroz - 4.Carbonilla Vegetal - 5.Bio Carbon Activado - 6.Agua de Mar - 7.Cera Natural - 8.Ormus'))
        continue
    }

    
    decision = parseInt(prompt('¿Quiere seguir agregando productos al carrito? 1.Si - 2.No'))
    if (decision === 1 ) {
        producto = parseInt
            (prompt (
                'Agrega los productos que quieres comprar: 1.Melaza de Caña - 2.Harina de Roca - 3.Cascarilla de Arroz - 4.Carbonilla Vegetal - 5.Bio Carbon Activado - 6.Agua de Mar - 7.Cera Natural - 8.Ormus'
                )
            )
    } else {
        seguirComprando = false
    }

}

cuota = parseInt(prompt('Elegir cuotas a pagar: 1.(3) Cuotas sin interes 2.(6) Cuotas sin interes 3.(12) Cuotas sin interes'))

while (pagarEnCuota === true) {
 
    if (cuota === 1){
        totalCuota = totalCompra / 3
        alert ('El total de tu compra es ' + totalCompra + ' en  3 cuotas sin interes de $' + totalCuota)
        break
    } else if (cuota === 2) {
        totalCuota = totalCompra / 6 
        alert ('El total de tu compra es ' + totalCompra + ' en  6 cuotas sin interes de $' + totalCuota)
        break
    } else if (cuota === 3){
        totalCuota = totalCompra / 12 
        alert ('El total de tu compra es ' + totalCompra + ' en  12 sin interes cuotas de $' + totalCuota)
        break
    } else {
        pagarEnCuota = false
    }
       

}
alert('Gracias por su compra')









