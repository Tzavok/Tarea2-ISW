numero1 = 5
numero2 = 4

// 1. Crea una función que reciba un string y retorne el string en mayúsculas.

function stringUpperCase(str){
    return str.toUpperCase()
}
console.log(stringUpperCase("hola"))

// 2. Crea una función que reciba un string y retorne el string en minúsculas.

function stringLowerCase(str){
    return str.toLowerCase()
}
console.log(stringLowerCase("HOLA"))

// 3. Crear una función que reciba como parámetro 2 números y los reste.

function suma(num1, num2)
{
    return num1 - num2
}
console.log(`La suma entre ${numero1} y ${numero2} es: ${suma(numero1, numero2)}`)

// 4. Crear una función que reciba como parámetro 2 números y los divida.

function division(num1, num2)
{
    return num1 / num2
}
console.log(`La division entre ${numero1} y ${numero2} es: ${division(numero1, numero2)}`)

// 5. Crear una función que reciba como parámetro 2 números y los multiplique.

function multiplicacion(num1, num2)
{
    return num1 * num2
}

console.log(`La multiplicacion entre ${numero1} y ${numero2} es: ${multiplicacion(numero1, numero2)}`)

// 6. Crear una función que reciba un string y devuelva la longitud del string.

function stringLength(str){
    return str.length
}
console.log("El largo del string es:", stringLength("Hola Hola"))