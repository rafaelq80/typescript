// Cria a Coleção Set
const frutas: Set<string> = new Set<string>();

// Adicionar uma fruta de cada vez
frutas.add("Kiwi")
frutas.add("Caqui")
frutas.add("Manga")
frutas.add("Caqui")

// Observe que a fruta Caqui não foi adicionada duas vezes
console.table(frutas)

console.log("A fruta Caqui existe? " + frutas.has("Caqui"))

console.log("A fruta Morango existe? " + frutas.has("Morango"))


console.table(frutas)

// Apagar a fruta da Coleção Set
frutas.delete("Caqui")

console.table(frutas)