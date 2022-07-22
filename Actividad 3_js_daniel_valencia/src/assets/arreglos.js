
console.log('Conectado')

console.warn('Imprimiendo Capitán América por consola')

const personajes =['Thor','Iroman', 'Batman', 'Superman', 'Capitán América']
console.log({ personajes })
console.log(personajes[4])


console.warn('Agregando un nuevo elemento la longitud del arreglo')

console.log({personajes})
personajes.push('Daniel', 'Dante', 'Kakarotto','Capitan América')
console.log(personajes[personajes.length])




console.log('Hallando el primer y último elemento')
console.log(personajes[0])
console.log(personajes[3])
console.log(personajes[personajes.length - 1])
console.log(personajes.length - 1)

console.warn('Agregando un nuevo elemento al inicio de un arreglo')

personajes.unshift('black Gokú' ) 
console.log({personajes})

console.warn('Eliminar el último el elemento de un arreglo')

console.log(personajes.pop())
console.log({personajes})


console.warn('hallando el índice del elementro')

let thorIndex = personajes.indexOf('Thor')
console.log({thorIndex})








