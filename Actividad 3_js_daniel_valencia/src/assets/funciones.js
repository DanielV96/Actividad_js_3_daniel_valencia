console.warn('Funciones')

console.warn ('Escribiendo una función tradicional')

function saludar() {
  console.log('Hola Mundo')
}
saludar()


console.warn ('Escribiendo una función tradicional en un const')

const saludar1 = function () {
console.log('Hola mundo desde otra función')

}
saludar1()


const saludar2 = () =>{
  console.log('Saludando desde una función flecha')
}
saludar2()


console.warn ('Escribiendo una función de flecha con parámetros')

const saludar3 = (nombre) => {

  console.log(`Hola ${nombre}`)
}

saludar3('Flor María Mosquera')
saludar3('Daniel V.')

console.warn ('Escribiendo una función de flecha con parámetros con retorno')

const saludar4 = (nombre) => {
  return `Hola  ${nombre}`  
}


let Saludando = saludar4('Daniel')  
console.log(Saludando)


console.warn ('Escribiendo una función de flecha con parámetros con retorno abreviada')

const saludar5 = (nombre) => `Hola ${nombre}`  


let Saludando2 = saludar5('YEOUI')  
console.log(Saludando2)


console.warn ('Función con Math.random')

function rand() {
  return Math.random()
}

console.log(rand())


const rand = () => Math.random()
console.log(rand())
