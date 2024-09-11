const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

const numeros = [numero1, numero2, numero3]

// 1. Imprimir en consola el número mayor de los tres.

let mayor = null
for (let numero in numeros){
    if (mayor == null){
        mayor = numero[numero]
    }
    else if (numeros[numero] > mayor){
        mayor = numeros[numero]
    }
} 
console.log("El mayor de los numeros es:", mayor)

// 2. Imprimir en consola el número menor de los tres.

let menor = null
for (let numero in numeros){
    if (menor == null){
        menor = numeros[numero]
    }
    else if (numeros[numero] < menor){
        menor = numeros[numero]
    }
} 
console.log("El menor de los numeros es:", menor)

// 3. Imprimir en consola si el numero1 es par o impar.

if (numero1 % 2 == 0){
    console.log("El numero1 es par")
}
else{
    console.log("El numero1 es impar")
}

// 4. Imprimir en consola si el numero2 es par o impar.

if (numero2 % 2 == 0){
    console.log("El numero2 es par")
}
else{
    console.log("El numero2 es impar")
}

// 5. Imprimir en consola si el numero3 es par o impar.

if (numero3 % 2 == 0){
    console.log("El numero3 es par")
}
else{
    console.log("El numero3 es impar")
}

// 6. Imprimir en consola si el numero1 es múltiplo de 5.

if (numero3 % 5 == 0){
    console.log("El numero3 es multiplo de 5")
}
else{
    console.log("El numero3 no es multiplo de 3")
}

// 7. Imprimir en consola si el numero2 es múltiplo de 5.

if (numero2 % 5 == 0){
    console.log("El numero2 es multiplo de 5")
}
else{
    console.log("El numero2 no es multiplo de 3")
}

// 8. Imprimir en consola si el numero3 es múltiplo de 5.

if (numero3 % 5 == 0){
    console.log("El numero3 es multiplo de 5")
}
else{
    console.log("El numero3 no es multiplo de 3")
}