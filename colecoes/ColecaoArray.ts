
const numeros: Array<number> = new Array<number>();

// Adicionar um elemento de cada vez
numeros.push(1)
numeros.push(5)
numeros.push(7)
numeros.push(1)

// Adiciona vários elementos de uma vez só
numeros.unshift(2.5, 4.5)

console.table(numeros)

console.log("A posição do elemento 5 é: " + numeros.indexOf(5))

console.log("O elemento 7 existe? " + numeros.includes(7))

console.log("O elemento 10 existe? " + numeros.includes(10))

// Atualizar os dados de um elemento
numeros[numeros.indexOf(7)] = 10;

console.table(numeros)

// Apagar um elemento do Array
// Primeiro parâmetro é indice do elemento
// Segundo parâmetros é quantos elementos vc deseja apagar a partir do indice
numeros.splice(numeros.indexOf(10), 1)

console.table(numeros)