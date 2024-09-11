const numeros = [1, 2, 3, 4, 5]


// 1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.

function sumaArray(arr)
{
    suma = 0
    for (let numero in arr)
    {
        suma = suma + arr[numero]
    }
    return suma
}
console.log("La suma de los numeros del array es:", sumaArray(numeros))

// 2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.

function promArray(arr)
{
    suma = 0
    for (let numero in arr)
    {
        suma = suma + arr[numero]
    }
    return suma/arr.length
}
console.log("El promedio de los numeros del array es:", promArray(numeros))

// 3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.

const strings = ["hola", "chao", "tomate", "cafe"]

function strMayusArray(arr)
{
    arregloMayus = []
    for (str in arr)
    {
        arregloMayus.push(arr[str].toUpperCase())
    }
    return arregloMayus
}
console.log("El arreglo original:", strings)
console.log("El arreglo en mayusculas:", strMayusArray(strings))

// 4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.

function soloParesArray(arr)
{
    soloPares = []
    for (num in arr)
    {
        if (num % 2 == 0 && num > 0)
        {
            soloPares.push(num) 
        }
        
    }
    return soloPares
}
console.log("El arreglo de solo pares:", soloParesArray(numeros))