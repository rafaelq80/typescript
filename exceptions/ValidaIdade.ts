import readline = require("readline-sync");
import { ExcecaoSimples } from "./ExcecaoSimples";

let loop: boolean = true

do {

    try {

        let idade: number = readline.questionInt("Digite a idade: ")
        validarIdade(idade)

        loop = false

    } catch (error) {
        if( error instanceof ExcecaoSimples){
            console.error(error.name)
            console.error(error.message)
            console.error("Erro: Digite uma idade maior do que 18 anos!")
        }else
            console.error(error)
    }

} while (loop)

function validarIdade(idade: number): void {
    if (idade < 18)
        throw new ExcecaoSimples("A pessoa é menor de idade!")
    else
        console.log("A pessoa é maior de idade!")
}