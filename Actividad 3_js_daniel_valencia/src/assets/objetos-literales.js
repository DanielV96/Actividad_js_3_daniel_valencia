console.log('Objetos literales ')

console.warn('Creando un objeto literal')

const personaje = {
  nombre: 'Tony Stark',
  codeName: 'Iroman',
  estaVivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    ing: -118.7,
  },

  trajes: ['Mark I', 'Mark V', 'Hulkbsuter'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu California',
  },
  'ultima-pelicula': 'End Game',

}

console.warn('Accediendo al objeto y sus propiedades')

console.log({personaje})

console.log(`nombre: ${personaje.nombre}`)
console.log(`apodo: ${personaje['codeName']}`)
console.log(`nombre: ${personaje.nombre}`)


let x = 'estaVivo'
console.log(`estaVivo: ${personaje[x]}`)
console.log(`ultima pelicula: ${personaje['ultima-pelicula']}`)

console.warn('Borrando un objeto literal')  




console.log(`Cantidad de trajes: ${personaje.trajes.length}`)
console.log(`Traje número 3: ${personaje.trajes[2]} `)

