const funcionarios: Map<string, number> = new Map<string, number>();

funcionarios.set("João", 25);
funcionarios.set("Pedro", 21);
funcionarios.set("Maria", 35);
funcionarios.set("Mariana", 31);
funcionarios.set("Amélia", 45);

for(const [chave, valor] of funcionarios) 
    console.log(`A funcionária ${chave} tem ${valor} de idade`)

console.log(`\nExiste um Funcionário chamado João? ${funcionarios.has("João")}`);

funcionarios.delete("Pedro");

console.table(funcionarios);
