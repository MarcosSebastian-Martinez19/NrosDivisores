/*6. Muestre todos los numeros divisores del número que ingresó por el prompt*/

let numIngresado = parseInt(prompt("Ingrese un número"))

document.write("Los números divisores del " + numIngresado + " son:")

for (let i = 0; i <= numIngresado; i++) {
    if(numIngresado % i === 0) {
        document.write("<br>" + i + " es divisible por: " + numIngresado)
    } else {
        document.write("<br>" + i + " no es divisible por: " + numIngresado)
    }
}