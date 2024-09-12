
// 1. Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.

const persona = {
    nombre: "Juan Carlos",
    edad: 30,
    genero: "Masculino"
}

console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad} y Genero: ${persona.genero}`)

// 2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.

const caja = {
    cuadernos: "Buen estado",
    lapices: "Mal estado",
    papel: "Buen estado",
    fotografias: "Mal estado",
}
console.log(caja)

for (let att in caja)
{
    console.log(`${att} es de tipo: ${typeof att}`)
}