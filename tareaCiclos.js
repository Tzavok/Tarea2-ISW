// 1. Imprimir en consola los números del 1 al 10.

console.log("Numeros del 1 al 10")
for (let i = 1; i < 11; i++)
{
    console.log(i)
}
console.log("\n")

// 2. Imprimir en consola los números del 10 al 1.

console.log("Numeros del 10 al 1")
for (let i = 10; i > 0; i--)
    {
        console.log(i)
    }

// 3. Imprimir en consola los números del 1 al 10 pero solo los pares.

console.log("Numeros del 1 al 10, pero solo los pares.")
for (let i = 1; i < 11; i++)
{
    if (i % 2 == 0)
    {
        console.log(i)
    }
}
console.log("\n")

// 4. Imprimir en consola los números del 1 al 10 pero solo los impares.

console.log("Numeros del 1 al 10, pero solo los impares.")
for (let i = 1; i < 11; i++)
{
    if (i % 2 !== 0)
    {
        console.log(i)
    }
}
console.log("\n")

// 5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.

console.log("Numeros del 1 al 10, pero solo los multiplos de 3.")
for (let i = 1; i < 11; i++)
    {
        if (i % 3 == 0)
        {
            console.log(i)
        }
    }
    console.log("\n")

// 6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.

console.log("Numeros del 1 al 10, pero solo los multiplos de 5.")
for (let i = 1; i < 11; i++)
    {
        if (i % 5 == 0)
        {
            console.log(i)
        }
    }
    console.log("\n")

// 7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.

console.log("Numeros del 1 al 10, pero solo los multiplos de 3 y 5.")
for (let i = 1; i < 11; i++)
    {
        if (i % 3 == 0 && i % 5 == 0)
        {
            console.log(i)
        }
    }
    console.log("\n")

// 8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.

console.log("Numeros del 1 al 10, pero solo los multiplos de 3 o 5.")
for (let i = 1; i < 11; i++)
    {
        if (i % 3 == 0 || i % 5 == 0)
        {
            console.log(i)
        }
    }
    console.log("\n")