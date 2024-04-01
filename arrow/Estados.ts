let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Rio Grande do Norte",
    "Santa Catarina",
    "Paraná"
]

let estadosRepetidos: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Rio Grande do Norte",
    "Santa Catarina",
    "Paraná",
    "Rio de Janeiro",
    "Minas Gerais"
]

let estadosContemRio = estados.filter(e => e.includes("Rio"));

console.dir(estadosContemRio.sort())

let estadosRioParana = estados.some(e => {
    return e === "Rio de Janeiro" || e === "Paraná"
});

console.log(estadosRioParana)